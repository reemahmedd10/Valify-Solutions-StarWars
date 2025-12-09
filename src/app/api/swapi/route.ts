import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const endpoint = searchParams.get('endpoint');
  
  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 });
  }

  try {
    const url = `https://swapi.dev/api${endpoint}`;
    const response = await fetch(url, { 
      // @ts-ignore
      agent,
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('SWAPI fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from SWAPI' },
      { status: 500 }
    );
  }
}


