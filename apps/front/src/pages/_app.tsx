import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import {Layout} from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <Analytics/>
      <Layout>
            <Component {...pageProps} />
      </Layout>
  </>
}
