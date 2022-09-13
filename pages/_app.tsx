import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 2,
            cacheTime: 1000 *  60 * 3,
            retry: 0
        },
    },
})

function MyApp({Component, pageProps}: AppProps) {
    if (typeof window === 'undefined') return null

    const persister = createSyncStoragePersister({
        storage: window.localStorage,
    });

    return (
        <>
            <PersistQueryClientProvider client={queryClient} persistOptions={{persister}}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={true}/>
            </PersistQueryClientProvider>
        </>
    )
}

export default MyApp
