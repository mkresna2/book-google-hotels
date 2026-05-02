# HotelOracle Client

A Next.js application that integrates with the [HotelOracle MCP](https://github.com/ToolOracle/hoteloracle) server to provide hotel search and booking capabilities through a modern web interface.

## Features

- 🏨 Search hotels by location or name
- 🔌 Direct integration with HotelOracle MCP server
- 🎨 Clean, responsive UI built with Tailwind CSS
- ⚡ Server-side API routing for secure MCP communication
- 📘 TypeScript support

## Prerequisites

- Node.js 18+ 
- npm or yarn
- HotelOracle MCP server running (see https://github.com/ToolOracle/hoteloracle)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your MCP server URL:

```env
MCP_SERVER_URL=http://localhost:8080
```

Replace with the actual URL where your HotelOracle MCP server is running.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Start the HotelOracle MCP server** - Ensure the MCP server is running and accessible
2. **Search for hotels** - Enter a location, city, or hotel name in the search box
3. **View results** - Click "Search Hotels" to query the MCP server and display results
4. **Explore details** - Browse available hotels with their information

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MCP_SERVER_URL` | URL of the HotelOracle MCP server | `http://localhost:8080` |

### API Route

The app connects to the MCP server via the API route at `/api/hotels`. 

Modify `src/app/api/hotels/route.ts` if you need to:
- Adjust the endpoint URL
- Change request/response formats
- Add authentication headers
- Implement additional MCP tools or resources

## Project Structure

```
hoteloracle-client/
├── src/
│   └── app/
│       ├── api/
│       │   └── hotels/
│       │       └── route.ts    # API route for MCP communication
│       ├── layout.tsx          # Root layout with global styles
│       ├── page.tsx            # Main search interface
│       └── globals.css         # Global styles (Tailwind CSS)
├── .env.example                # Environment variables template
├── .env.local                  # Local environment configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Set production environment variables in your hosting platform

3. Start the production server:
   ```bash
   npm run start
   ```

## Troubleshooting

- **Connection errors**: Verify the MCP server is running and the URL in `.env.local` is correct
- **No results returned**: Check that the MCP server has data for your search query
- **CORS issues**: The API route handles server-to-server communication, avoiding browser CORS restrictions

## License

MIT
