// app/layout.tsx
import './globals.css';
import './css/common.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marina Shvachko | Portfolio',
  description: 'Lead Quality Engineer & SDET Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Next.js renders the full page component here without wrappers */}
        {children}
      </body>
    </html>
  );
}