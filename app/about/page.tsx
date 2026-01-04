import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Male Fashion',
  description: 'Learn about Male Fashion - your destination for premium men\'s clothing and accessories.',
  keywords: 'about us, male fashion, men clothing, fashion brand',
};

export default function AboutPage() {
  return (
    <div className="container-fluid">
      <Header />
      
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <Image src="/Male Fashion/img/logo.png" alt="Male Fashion Logo" width={200} height={80} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card" style={{ minHeight: 'auto' }}>
              <div className="card-body">
                <h1 className="card-title text-center border-bottom border-2 pb-3 mb-4">About Us</h1>
                
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h3 className="mb-3">Welcome to Male Fashion</h3>
                    <p className="lead mb-4">
                      Your premier destination for contemporary men's fashion and lifestyle essentials.
                    </p>

                    <h4 className="mt-4 mb-3">1. Always Look at the Trends</h4>
                    <p className="mb-4">
                      These trends have different meanings. The first trend you need to look up is the numbers. 
                      It means the demands, market value, booming business models, strategies other brand owners use, etc.
                      The next trend is the products themselves. Since the fashion industry is fast-paced, especially 
                      with social media... You need to keep up with the design trends in fashion.
                    </p>
                    <p className="mb-4">
                      This way, you'll know which clothes to make or source for modern fashion consumers.
                    </p>

                    <h4 className="mt-4 mb-3">2. Embrace Social Selling</h4>
                    <p className="mb-4">
                      Social selling is well-known in the fashion industry. There are big and small fashion brands 
                      going live on TikTok to sell... Integrating their socials to their eCommerce website... and more.
                      You need to use social media to your advantage. That's how you can reach more people, connect 
                      with your target customers, and increase your retail eCommerce sales.
                    </p>
                    <p className="mb-4">
                      Some social media platforms we use are:
                    </p>
                    <ul className="mb-4">
                      <li>Facebook</li>
                      <li>Instagram</li>
                      <li>TikTok</li>
                      <li>Twitter</li>
                    </ul>
                    <p className="mb-4">
                      But in social media marketing, it's important to note which platforms your customers are using. 
                      Why? So you can reach the right people.
                    </p>

                    <h4 className="mt-4 mb-3">3. Optimize for Customer Experience</h4>
                    <p className="mb-4">
                      Customer experience should be one of your top priorities... Because if a customer has a smooth 
                      experience during their transaction with you, they'll return.
                    </p>
                    <p className="mb-4">
                      So, what should you do? One thing is to optimize for mobile shopping. Many online shops do this, too. 
                      Why? Because some consumers prefer ordering through their mobile phones... It's more convenient. 
                      You might lose potential customers if your online store is not optimized for mobile.
                    </p>
                    <p className="mb-4">
                      The next one is to find a smooth-sailing theme. There are many eCommerce themes available in the market. 
                      But it's best to find an eCommerce tailored to the fashion industry.
                    </p>

                    <h4 className="mt-4 mb-3">What Are You Waiting For?</h4>
                    <p className="mb-4">
                      Enhance your fashion eCommerce brand with these strategies! Building and enhancing your fashion brand 
                      takes a lot of work. You want to make sure your products will sell and customers will come back for your products.
                    </p>
                    <p className="mb-4">
                      That's why you need to optimize your eCommerce site. Doing so will make your customers' lives easier 
                      and retain them as customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}