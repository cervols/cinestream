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
      <body className={`${inter.className} antialiased bg-[#0A0A0A] text-[#888888]`} >
        <header>
          <MainNav />
        </header>

        <style>{`
          h1, h2, h3, h4, h5, h6 {
            color: #fff !important;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
