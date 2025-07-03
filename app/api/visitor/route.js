import { NextResponse } from 'next/server';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function POST() {
  try {
    const updatedCount = await redis.incr('visitor_count');

    return NextResponse.json({ count: updatedCount });
  } 
  catch (error) {
    console.error('Redis Error:', error);
    return NextResponse.json(
      { count: 0, error: 'Redis Error' },
      { status: 500 }
    );
  }
}
