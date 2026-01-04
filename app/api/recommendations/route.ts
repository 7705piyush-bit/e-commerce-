import { NextRequest, NextResponse } from 'next/server';
import { RecommendationEngine } from '@/lib/recommendations';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');
  const productId = searchParams.get('productId');
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '4');

  const engine = RecommendationEngine.getInstance();
  let recommendations = [];

  try {
    switch (type) {
      case 'collaborative':
        if (productId) {
          recommendations = engine.getCollaborativeRecommendations(productId, limit);
        }
        break;
      case 'trending':
        recommendations = engine.getTrendingProducts(limit);
        break;
      case 'personalized':
        recommendations = engine.getPersonalizedRecommendations('user-1', limit);
        break;
      case 'category':
        if (category) {
          recommendations = engine.getCategoryBasedRecommendations(category, limit);
        }
        break;
      default:
        return NextResponse.json({ error: 'Invalid recommendation type' }, { status: 400 });
    }

    return NextResponse.json({ recommendations });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { productId, action, relatedProductId } = await request.json();
    
    if (!productId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const engine = RecommendationEngine.getInstance();
    engine.trackInteraction(productId, action, relatedProductId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking interaction:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}