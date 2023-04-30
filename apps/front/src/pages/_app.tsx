import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {Analytics} from '@vercel/analytics/react';
import {Layout} from "@/components/Layout";
import {ApolloProvider} from '@apollo/client'
import apolloClient from '../lib/apollo'
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";


export default function App({Component, pageProps}: AppProps) {
    return <>
        <Analytics/>
        <ApolloProvider client={apolloClient}>
            <Layout>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <Component {...pageProps} />
                </DevSupport>
            </Layout>
        </ApolloProvider>
    </>
}
