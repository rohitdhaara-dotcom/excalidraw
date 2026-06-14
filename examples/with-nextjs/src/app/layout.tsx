export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Bypass Next.js bundler and load CSS directly */}
        <link rel="stylesheet" href="https://unpkg.com/@excalidraw/excalidraw/index.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
