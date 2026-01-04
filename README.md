# Male Fashion - Next.js E-commerce with SSR & Recommendations

A modern e-commerce application built with Next.js 14, featuring Server-Side Rendering (SSR) for optimal SEO performance and a sophisticated product recommendation engine using collaborative filtering.

## 🚀 Features

### Server-Side Rendering (SSR)
- **SEO Optimized**: All product and category pages are server-rendered for better search engine visibility
- **Fast Initial Load**: Improved Time to First Byte (TTFB) and Core Web Vitals
- **Dynamic Meta Tags**: Automatic generation of SEO-friendly meta tags for each product
- **Structured Data**: Rich snippets support for better search results

### Product Recommendation Engine
- **Collaborative Filtering**: "Customers who bought this also bought..." recommendations
- **Content-Based Filtering**: Similar products in the same category
- **Trending Products**: Algorithm based on ratings and review counts
- **Personalized Recommendations**: User behavior-based suggestions
- **Real-time Tracking**: User interaction tracking for improved recommendations

### Modern Tech Stack
- **Next.js 14**: Latest App Router with TypeScript support
- **Bootstrap 5**: Responsive design and components
- **Image Optimization**: Next.js Image component for optimal loading
- **API Routes**: RESTful endpoints for recommendations and products

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── product/[id]/      # Dynamic product pages (SSR)
│   ├── shop/              # Shop page
│   ├── about/             # About page
│   ├── cart/              # Shopping cart
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── data/                  # Product data and utilities
├── lib/                   # Recommendation engine
├── types/                 # TypeScript type definitions
└── Male Fashion/          # Static assets (images)
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## 🎯 SEO Features

### Automatic Meta Tag Generation
Each product page automatically generates:
- Title tags with product name and brand
- Meta descriptions from product descriptions
- Open Graph tags for social media sharing
- Keywords based on product category and attributes

### Structured Data
- Product schema markup
- Breadcrumb navigation
- Rating and review data

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for non-critical content
- Efficient bundle splitting
- Server-side rendering for faster initial loads

## 🤖 Recommendation Engine

### Algorithm Types

1. **Collaborative Filtering**
   - Analyzes user purchase and view patterns
   - Suggests products based on similar user behavior
   - "Customers who bought X also bought Y"

2. **Content-Based Filtering**
   - Recommends similar products in the same category
   - Based on product attributes and ratings

3. **Trending Algorithm**
   - Combines rating scores with review count
   - Uses logarithmic scaling for review popularity
   - Identifies currently popular products

4. **Personalized Recommendations**
   - Combines multiple recommendation types
   - Adapts to user preferences over time

### Usage Example

```typescript
import { RecommendationEngine } from '@/lib/recommendations';

const engine = RecommendationEngine.getInstance();

// Get collaborative recommendations
const recommendations = engine.getCollaborativeRecommendations('product-1', 4);

// Track user interaction
engine.trackInteraction('product-1', 'view', 'product-2');
```

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=shoes` - Get products by category
- `GET /api/products/[id]` - Get specific product

### Recommendations
- `GET /api/recommendations?type=collaborative&productId=1` - Collaborative filtering
- `GET /api/recommendations?type=trending&limit=6` - Trending products
- `POST /api/recommendations` - Track user interactions

## 🎨 Customization

### Adding New Products
Edit `data/products.ts` to add new products:

```typescript
{
  id: '7',
  name: 'New Product',
  category: 'category',
  price: 999,
  image: '/path/to/image.jpg',
  description: 'Product description',
  // ... other properties
}
```

### Styling
- Global styles: `app/globals.css`
- Bootstrap customization: Modify CSS variables
- Component-specific styles: Use CSS modules or styled-components

### Recommendation Tuning
Adjust recommendation algorithms in `lib/recommendations.ts`:
- Modify scoring algorithms
- Change recommendation limits
- Add new recommendation types

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Ensure Node.js 18+ support

## 📈 Performance Metrics

Expected improvements with SSR:
- **SEO Score**: 90+ (vs 60-70 for SPA)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Time to Interactive**: <3s

## 🔧 Development

### Adding New Pages
1. Create page in `app/` directory
2. Add metadata export for SEO
3. Implement server-side data fetching if needed

### Extending Recommendations
1. Add new algorithm to `RecommendationEngine`
2. Create API endpoint in `app/api/recommendations/`
3. Update frontend components

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

Built with ❤️ using Next.js and modern web technologies.