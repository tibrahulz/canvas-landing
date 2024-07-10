import { Nunito } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import AntdStyledComponentsRegistry from "../components/AntdStyledComponentsRegistry";
import LandingHeader from '../components/LandingHeder'
import styles from './page.module.scss'
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'The Stripe for Micro Gateway',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="shortcut icon" href="/public/images/logo.svg" />
      <body className={inter.className}>
        <AntdStyledComponentsRegistry>
          <main className={styles.main}>
            <LandingHeader />
            {children}
            <Footer />
          </main>
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  )
}
