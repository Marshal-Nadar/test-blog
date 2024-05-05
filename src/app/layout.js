import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import Footer from '@/components/footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import { Quicksand } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'Marshal Dev',
  description: 'The best blog app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <Link rel='icon' href='/favicon.ico'></Link>
      </Head>
      <body className={inter.className}>
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
      </body>
      <GoogleAnalytics gaId='G-KRZ1HHL1TY' />
    </html>
  );
}
