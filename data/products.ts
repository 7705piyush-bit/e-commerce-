import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Running Shoes',
    category: 'shoes',
    price: 1838,
    originalPrice: 4595,
    discount: 60,
    image: '/Male Fashion/img/shoes.jpg',
    description: 'Comfortable running shoes with advanced cushioning technology',
    badge: 'New Arrivals',
    inStock: true,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Classic Leather Jacket',
    category: 'jackets',
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    image: '/Male Fashion/img/jaket1.webp',
    description: 'Premium leather jacket with modern fit',
    badge: 'Best Seller',
    inStock: true,
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    category: 'tshirts',
    price: 799,
    originalPrice: 1299,
    discount: 38,
    image: '/Male Fashion/img/tshirt.jpg',
    description: '100% cotton comfortable t-shirt',
    badge: 'Top Rated',
    inStock: true,
    rating: 4.6,
    reviewCount: 234
  },
  {
    id: '4',
    name: 'Baseball Cap',
    category: 'caps',
    price: 599,
    originalPrice: 999,
    discount: 40,
    image: '/Male Fashion/img/cap.jpeg',
    description: 'Adjustable baseball cap with premium fabric',
    badge: 'New Arrivals',
    inStock: true,
    rating: 4.3,
    reviewCount: 67
  },
  {
    id: '5',
    name: 'Sport Sneakers',
    category: 'shoes',
    price: 2199,
    originalPrice: 3999,
    discount: 45,
    image: '/Male Fashion/img/shoes2.jpg',
    description: 'Lightweight sport sneakers for active lifestyle',
    badge: 'Top Rated',
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '6',
    name: 'Winter Jacket',
    category: 'jackets',
    price: 3499,
    originalPrice: 5999,
    discount: 42,
    image: '/Male Fashion/img/jacket2.webp',
    description: 'Warm winter jacket with water-resistant coating',
    badge: 'Best Seller',
    inStock: true,
    rating: 4.4,
    reviewCount: 92
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badge);
};