import Head from 'next/head';
import { Fragment } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>Abhinay Reddy</title>
                <meta name='author' content='Abhinay Reddy' />
                <link rel='icon' type='image/svg' href='/arlogo.svg' />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });`
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
