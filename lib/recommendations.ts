import { Product, RecommendationData } from '@/types/product';
import { products } from '@/data/products';

// Mock user interaction data - in a real app, this would come from a database
const mockUserInteractions: RecommendationData[] = [
  {
    productId: '1',
    viewedWith: ['2', '3', '5'],
    purchasedWith: ['2', '4'],
    categoryViews: { 'jackets': 5, 'tshirts': 3, 'caps': 2 }
  },
  {
    productId: '2',
    viewedWith: ['1', '6', '3'],
    purchasedWith: ['1', '3'],
    categoryViews: { 'shoes': 4, 'tshirts': 6, 'caps': 1 }
  },
  {
    productId: '3',
    viewedWith: ['1', '2', '4'],
    purchasedWith: ['2', '5'],
    categoryViews: { 'shoes': 3, 'jackets': 4, 'caps': 2 }
  }
];

export class RecommendationEngine {
  private static instance: RecommendationEngine;
  private userInteractions: Map<string, RecommendationData>;

  private constructor() {
    this.userInteractions = new Map();
    // Initialize with mock data
    mockUserInteractions.forEach(data => {
      this.userInteractions.set(data.productId, data);
    });
  }

  public static getInstance(): RecommendationEngine {
    if (!RecommendationEngine.instance) {
      RecommendationEngine.instance = new RecommendationEngine();
    }
    return RecommendationEngine.instance;
  }

  // Collaborative filtering: "Customers who bought this also bought..."
  public getCollaborativeRecommendations(productId: string, limit: number = 4): Product[] {
    const interaction = this.userInteractions.get(productId);
    if (!interaction) {
      return this.getFallbackRecommendations(productId, limit);
    }

    // Get products that were purchased together
    const recommendedIds = interaction.purchasedWith
      .concat(interaction.viewedWith)
      .filter((id, index, arr) => arr.indexOf(id) === index) // Remove duplicates
      .slice(0, limit);

    const recommendations = recommendedIds
      .map(id => products.find(p => p.id === id))
      .filter((product): product is Product => product !== undefined);

    // Fill remaining slots with category-based recommendations
    if (recommendations.length < limit) {
      const currentProduct = products.find(p => p.id === productId);
      if (currentProduct) {
        const categoryRecommendations = this.getCategoryBasedRecommendations(
          currentProduct.category,
          limit - recommendations.length,
          [...recommendedIds, productId]
        );
        recommendations.push(...categoryRecommendations);
      }
    }

    return recommendations.slice(0, limit);
  }

  // Content-based filtering: Similar products in same category
  public getCategoryBasedRecommendations(
    category: string,
    limit: number = 4,
    excludeIds: string[] = []
  ): Product[] {
    return products
      .filter(product => 
        product.category === category && 
        !excludeIds.includes(product.id)
      )
      .sort((a, b) => b.rating - a.rating) // Sort by rating
      .slice(0, limit);
  }

  // Trending products based on ratings and reviews
  public getTrendingProducts(limit: number = 6): Product[] {
    return products
      .sort((a, b) => {
        // Calculate trending score based on rating and review count
        const scoreA = a.rating * Math.log(a.reviewCount + 1);
        const scoreB = b.rating * Math.log(b.reviewCount + 1);
        return scoreB - scoreA;
      })
      .slice(0, limit);
  }

  // Personalized recommendations based on user's category preferences
  public getPersonalizedRecommendations(
    userId: string,
    limit: number = 6
  ): Product[] {
    // In a real app, you'd fetch user's browsing/purchase history
    // For demo, we'll use a mix of trending and category-based recommendations
    const trending = this.getTrendingProducts(3);
    const categoryMix = this.getCategoryBasedRecommendations('shoes', 2)
      .concat(this.getCategoryBasedRecommendations('jackets', 1));
    
    return [...trending, ...categoryMix].slice(0, limit);
  }

  // Fallback recommendations when no interaction data exists
  private getFallbackRecommendations(productId: string, limit: number): Product[] {
    const currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) {
      return this.getTrendingProducts(limit);
    }

    return this.getCategoryBasedRecommendations(
      currentProduct.category,
      limit,
      [productId]
    );
  }

  // Track user interaction (in a real app, this would save to database)
  public trackInteraction(productId: string, action: 'view' | 'purchase', relatedProductId?: string) {
    const existing = this.userInteractions.get(productId) || {
      productId,
      viewedWith: [],
      purchasedWith: [],
      categoryViews: {}
    };

    if (relatedProductId) {
      if (action === 'view' && !existing.viewedWith.includes(relatedProductId)) {
        existing.viewedWith.push(relatedProductId);
      } else if (action === 'purchase' && !existing.purchasedWith.includes(relatedProductId)) {
        existing.purchasedWith.push(relatedProductId);
      }
    }

    this.userInteractions.set(productId, existing);
  }
}