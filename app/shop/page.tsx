import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import RecommendationSection from '@/components/RecommendationSection';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop - Male Fashion',
  description: 'Browse our complete collection of premium men\'s clothing, shoes, and accessories.',
  keywords: 'shop, men fashion, clothing, shoes, jackets, t-shirts, caps',
};

export default function ShopPage() {
  const categories = ['shoes', 'jackets', 'tshirts', 'caps'];

  return (
    <div className="container-fluid">
      <Header />
      
      <div className="container mt-4">
        <h1 className="text-center mb-4">Shop All Products</h1>
        
        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <button className="btn btn-outline-primary active">All</button>
              {categories.map(category => (
                <button key={category} className="btn btn-outline-primary text-capitalize">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Trending Recommendations */}
      <RecommendationSection
        title="You might also like"
        type="trending"
        limit={4}
      />

      <Footer />
    </div>
  );
}