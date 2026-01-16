import './globals.css';
import { comicRelief } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${comicRelief.className} antialiased`}>{children}</body>
    </html>
  );
}
