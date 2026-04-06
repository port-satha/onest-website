import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.email || !data.firstName || !data.lastName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the membership signup (replace with Brevo/HubSpot/LINE integration later)
    console.log("New membership signup:", {
      ...data,
      signupDate: data.signupDate || new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Welcome to the onest circle!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
