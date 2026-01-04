import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  showRecommendationBadge?: boolean;
}

export default function ProductCard({ product, showRecommendationBadge = false }: ProductCardProps) {
  return (
    <div className="col">
      <div className="card h-100 product-card position-relative">
        {product.badge && (
          <span className="badge bg-primary badge-custom">
            {product.badge}
          </span>
        )}
        {showRecommendationBadge && (
          <span className="badge bg-success badge-custom" style={{ top: '40px' }}>
            Recommended
          </span>
        )}
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            className="card-img-top"
            alt={product.name}
            width={300}
            height={250}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">{product.description}</p>
          
          <div className="price-section mb-2">
            <span className="fw-bold fs-5">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="original-price">₹{product.originalPrice}</span>
                {product.discount && (
                  <span className="discount-badge">{product.discount}% off</span>
                )}
              </>
            )}
          </div>
          
          <div className="d-flex align-items-center mb-2">
            <div className="text-warning me-2">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <small className="text-muted">({product.reviewCount} reviews)</small>
          </div>
          
          {product.badge && (
            <h6 className="text-primary">{product.badge}</h6>
          )}
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </small>
        </div>
      </div>
    </div>
  );
}