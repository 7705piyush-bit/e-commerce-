import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecommendationSection from '@/components/RecommendationSection';
import { getProductById } from '@/data/products';
import Image from 'next/image';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Male Fashion`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, men fashion, ${product.badge}`,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container-fluid">
      <Header />
      
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                <li className="breadcrumb-item active">{product.name}</li>
              </ol>
            </nav>
            
            <h1 className="mb-3">{product.name}</h1>
            
            <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-3">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
                <span className="ms-2 text-muted">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="price-section mb-4">
              <span className="h2 text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="h5 text-muted text-decoration-line-through ms-3">
                    ₹{product.originalPrice}
                  </span>
                  {product.discount && (
                    <span className="badge bg-danger ms-2">{product.discount}% OFF</span>
                  )}
                </>
              )}
            </div>

            <p className="lead mb-4">{product.description}</p>

            {product.badge && (
              <div className="mb-3">
                <span className="badge bg-success fs-6">{product.badge}</span>
              </div>
            )}

            <div className="mb-4">
              <span className={`badge ${product.inStock ? 'bg-success' : 'bg-danger'} fs-6`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button className="btn btn-primary btn-lg me-md-2" type="button">
                <i className="fa-solid fa-cart-plus me-2"></i>
                Add to Cart
              </button>
              <button className="btn btn-outline-secondary btn-lg" type="button">
                <i className="fa-regular fa-heart me-2"></i>
                Wishlist
              </button>
            </div>

            <div className="mt-4">
              <h5>Product Details</h5>
              <ul className="list-unstyled">
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Rating:</strong> {product.rating}/5</li>
                <li><strong>Reviews:</strong> {product.reviewCount}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Collaborative Filtering Recommendations */}
      <RecommendationSection
        title="Customers who bought this also bought"
        productId={product.id}
        type="collaborative"
        limit={4}
      />

      {/* Category-based Recommendations */}
      <RecommendationSection
        title={`More ${product.category}`}
        type="category"
        category={product.category}
        limit={4}
      />

      <Footer />
    </div>
  );
}