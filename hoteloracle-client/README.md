# HotelOracle Client

A Next.js application to consume the HotelOracle MCP (Model Context Protocol) server.

## Prerequisites

- Node.js 18+ 
- HotelOracle MCP server running (see https://github.com/ToolOracle/hoteloracle)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and set your MCP server URL.

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Start the HotelOracle MCP server
2. Enter a location or hotel name in the search box
3. Click "Search Hotels" to query the MCP server
4. View results displayed on the page

## Configuration

The app connects to the MCP server via the API route at `/api/hotels`. Modify `src/app/api/hotels/route.ts` if you need to adjust the endpoint or request format based on the actual HotelOracle MCP API specification.

## Project Structure

```
hoteloracle-client/
├── src/
│   └── app/
│       ├── api/
│       │   └── hotels/
│       │       └── route.ts    # API route for MCP communication
│       ├── layout.tsx          # Root layout
│       └── page.tsx            # Main search interface
├── .env.example                # Environment variables template
├── next.config.mjs             # Next.js configuration
├── package.json
└── tsconfig.json               # TypeScript configuration
```
