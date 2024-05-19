import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import Footer from '@/components/footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import { Quicksand } from 'next/font/google';

import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
import { AdblockContextProvider } from '@/context/AdblockContext';
import AdblockProvider from '@/providers/AdblockProvider';

const inter = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'Home',
  description: 'The best blog app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AdblockContextProvider>
          <AdblockProvider>
            <ThemeContextProvider>
              <ThemeProvider>
                <div className='container'>
                  <div className='wrapper'>
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </ThemeProvider>
            </ThemeContextProvider>
          </AdblockProvider>
        </AdblockContextProvider>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
