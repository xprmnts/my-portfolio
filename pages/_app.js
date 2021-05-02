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
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-YYLF8TN14S'
                ></script>
            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
