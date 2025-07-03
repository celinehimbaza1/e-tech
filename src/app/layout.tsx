// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar/page';

export const metadata = {
  title: 'Your E-Store',
  description: 'Shop the best products online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
