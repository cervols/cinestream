import './globals.css';
import { inter } from '@/app/ui/fonts';
import MainNav from '@/components/ui/main-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          <MainNav />
        </header>

        {children}
      </body>
    </html>
  );
}
