import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import RecommendationSection from '@/components/RecommendationSection';
import BootstrapClient from '@/components/BootstrapClient';
import { getFeaturedProducts } from '@/data/products';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Male Fashion - Premium Men\'s Clothing & Accessories',
  description: 'Discover the latest trends in men\'s fashion. Shop premium clothing, shoes, and accessories with free shipping and 30-day returns.',
  keywords: 'men fashion, clothing, shoes, jackets, t-shirts, caps, premium fashion, new arrivals',
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="container-fluid">
      <Header />
      
      {/* Hero Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src="/Male Fashion/img/Access Denied.jpeg" className="d-block w-100" alt="Fashion Banner" width={1200} height={500} />
          </div>
          <div className="carousel-item">
            <Image src="/Male Fashion/img/2.jpg" className="d-block w-100" alt="Fashion Banner" width={1200} height={500} />
          </div>
          <div className="carousel-item">
            <Image src="/Male Fashion/img/3.jpg" className="d-block w-100" alt="Fashion Banner" width={1200} height={500} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Collection Section */}
      <div className="row mt-4">
        <div className="col-sm-7">
          <h1 className="text-end">...</h1>
          <h1 className="text-end mt-5">Clothing</h1>
          <h1 className="text-end mt-2">Collections 2030</h1>
        </div>
        <div className="col-sm-5">
          <Image src="/Male Fashion/img/3.jpg" alt="Collection" width={400} height={300} />
        </div>
      </div>

      {/* Personalized Recommendations */}
      <RecommendationSection
        title="Recommended For You"
        type="personalized"
        limit={6}
      />

      {/* New Arrivals Section */}
      <div className="row">
        <div className="col-sm-12 mt-3">
          <h1 className="text-center border-bottom border-2" id="new-arrivals">New Arrivals</h1>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-sm-10 mx-auto">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <RecommendationSection
        title="Trending Now"
        type="trending"
        limit={6}
      />

      <Footer />
      
      <BootstrapClient />
    </div>
  );
}