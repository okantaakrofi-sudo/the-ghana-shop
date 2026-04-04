import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  // Logic to check if the referral code is valid
  if (code && code.startsWith('ELORM')) {
    return NextResponse.json({ 
      valid: true, 
      discountAmount: 20, 
      message: "20 AED Discount Applied!" 
    });
  }

  return NextResponse.json({ valid: false, message: "Invalid Code" }, { status: 400 });
}
