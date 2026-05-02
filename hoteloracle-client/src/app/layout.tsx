import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HotelOracle Client",
  description: "Next.js app to consume HotelOracle MCP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
