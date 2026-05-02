import { NextRequest, NextResponse } from "next/server";

// HotelOracle MCP integration
// Configure your MCP server connection details
const MCP_SERVER_URL = process.env.MCP_SERVER_URL || "http://localhost:3001";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    // Call the HotelOracle MCP server
    // Adjust the endpoint based on the actual MCP API
    const response = await fetch(`${MCP_SERVER_URL}/hotels`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tool: "search_hotels",
        arguments: { query },
      }),
    });

    if (!response.ok) {
      throw new Error(`MCP server error: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json({
      hotels: data.result || data.hotels || [],
    });
  } catch (error) {
    console.error("Hotel search error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to search hotels" },
      { status: 500 }
    );
  }
}
