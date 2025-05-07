import { NextResponse } from "next/server";
import { refreshUserCredits, getCurrentUserData } from "@/lib/auth/server-actions";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const refreshParam = url.searchParams.get('refresh');
  
  if (refreshParam === 'true') {
    const result = await refreshUserCredits();
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to refresh user data" },
        { status: 500 }
      );
    }
    
    const userData = await getCurrentUserData();
    return NextResponse.json(userData);
  }
  
  const userData = await getCurrentUserData();
  return NextResponse.json(userData);
} 