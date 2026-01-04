'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { RecommendationEngine } from '@/lib/recommendations';
import ProductCard from './ProductCard';

interface RecommendationSectionProps {
  title: string;
  productId?: string;
  type: 'collaborative' | 'trending' | 'personalized' | 'category';
  category?: string;
  limit?: number;
}

export default function RecommendationSection({
  title,
  productId,
  type,
  category,
  limit = 4
}: RecommendationSectionProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      const engine = RecommendationEngine.getInstance();
      let products: Product[] = [];

      switch (type) {
        case 'collaborative':
          if (productId) {
            products = engine.getCollaborativeRecommendations(productId, limit);
          }
          break;
        case 'trending':
          products = engine.getTrendingProducts(limit);
          break;
        case 'personalized':
          products = engine.getPersonalizedRecommendations('user-1', limit);
          break;
        case 'category':
          if (category) {
            products = engine.getCategoryBasedRecommendations(category, limit);
          }
          break;
      }

      setRecommendations(products);
      setLoading(false);
    };

    fetchRecommendations();
  }, [productId, type, category, limit]);

  if (loading) {
    return (
      <div className="recommendation-section">
        <div className="container">
          <h2 className="text-center mb-4">{title}</h2>
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="recommendation-section">
      <div className="container">
        <h2 className="text-center mb-4">{title}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {recommendations.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showRecommendationBadge={type === 'collaborative'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}