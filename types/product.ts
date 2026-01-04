export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  badge?: 'New Arrivals' | 'Best Seller' | 'Top Rated';
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface RecommendationData {
  productId: string;
  viewedWith: string[];
  purchasedWith: string[];
  categoryViews: Record<string, number>;
}