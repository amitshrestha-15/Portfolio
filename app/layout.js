import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Amit Shrestha - Software Developer',
  description: 'Enthusiastic undergraduate with a drive for continual growth and achievement. Proactively seeks challenges,maintaining a strong focus on goals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>Software Developer - Amit Shrestha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
