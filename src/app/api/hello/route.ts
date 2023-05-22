import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json("Hello World");
}

export async function POST(request: Request) {
  console.log(request.json());
  return NextResponse.json("Hello World");
}
