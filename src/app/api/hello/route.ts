import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json("Hello World");
}

export async function POST(request: NextRequest) {
  const a = await request.json();
  console.log(a);
  return NextResponse.json(a);
}
