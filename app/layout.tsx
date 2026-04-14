import Header from './components/section/Header';
import CustomCursor from './components/utility/CustomCursor';
import SmoothScroll from './components/utility/SmoothScroll';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
