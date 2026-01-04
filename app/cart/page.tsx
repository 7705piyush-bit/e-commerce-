import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecommendationSection from '@/components/RecommendationSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Shopping Cart - Male Fashion',
  description: 'Review your selected items and proceed to checkout.',
  keywords: 'shopping cart, checkout, male fashion',
};

export default function CartPage() {
  return (
    <div className="container-fluid">
      <Header />
      
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded">
              <h1 className="mb-3">Shopping Cart</h1>
              <a href="#" className="text-decoration-none">Deselect all items</a>
              <p className="text-end mt-3 mb-0">Price</p>
              <hr />
              
              {/* Sample Cart Item */}
              <div className="row align-items-center mb-4">
                <div className="col-auto">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                </div>
                <div className="col-md-3">
                  <Image 
                    src="/Male Fashion/img/3.jpg" 
                    alt="Product" 
                    width={200} 
                    height={200}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-6">
                  <h4>French Connection Jacket</h4>
                  <p className="text-success mb-2">In stock</p>
                  <p className="text-muted mb-3">Eligible for free shipping</p>
                  
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="gift" />
                    <label className="form-check-label" htmlFor="gift">
                      This will be a gift
                    </label>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <label htmlFor="qty" className="me-2">QTY:</label>
                    <select name="qty" id="qty" className="form-select" style={{width: 'auto'}}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 text-end">
                  <span className="badge bg-danger mb-2">60% off</span>
                  <p className="fw-bold fs-5 mb-0">₹1,838.00</p>
                </div>
              </div>
              
              <hr />
              <p className="text-end">
                Subtotal (1 item): <strong>₹1,838.00</strong>
              </p>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="bg-white p-4 rounded">
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" defaultChecked />
                <label className="form-check-label">
                  Your order is eligible for Free Delivery. Choose Free Delivery option at checkout.
                </label>
              </div>
              
              <p className="mb-3">
                Subtotal (1 item): <strong>₹1,838.00</strong>
              </p>
              
              <div className="d-grid mb-3">
                <button className="btn btn-warning btn-lg">
                  Proceed to Pay
                </button>
              </div>
              
              <p className="text-muted">EMI available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations for cart page */}
      <RecommendationSection
        title="Frequently bought together"
        type="trending"
        limit={4}
      />

      <Footer />
    </div>
  );
}