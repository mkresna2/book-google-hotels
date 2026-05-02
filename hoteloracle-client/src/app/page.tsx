"use client";

import { useState } from "react";

interface Hotel {
  id: string;
  name: string;
  location: string;
  rating?: number;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchHotels = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Replace with your MCP server endpoint
      const response = await fetch("/api/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      
      if (!response.ok) throw new Error("Failed to fetch hotels");
      
      const data = await response.json();
      setHotels(data.hotels || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>HotelOracle Client</h1>
      <p>Search for hotels using the HotelOracle MCP</p>
      
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location or hotel name..."
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            marginBottom: "0.5rem",
          }}
          onKeyDown={(e) => e.key === "Enter" && searchHotels()}
        />
        <button
          onClick={searchHotels}
          disabled={loading}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Searching..." : "Search Hotels"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {hotels.length > 0 && (
        <div>
          <h2>Results</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {hotels.map((hotel) => (
              <li
                key={hotel.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  borderRadius: "4px",
                }}
              >
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                {hotel.rating && <p>Rating: {hotel.rating}/5</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
