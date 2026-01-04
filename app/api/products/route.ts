import { NextRequest, NextResponse } from 'next/server';
import { products, getProductsByCategory } from '@/data/products';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '0');

  try {
    let result = category ? getProductsByCategory(category) : products;
    
    if (limit > 0) {
      result = result.slice(0, limit);
    }

    return NextResponse.json({ products: result });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}