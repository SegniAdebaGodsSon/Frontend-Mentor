import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en' className=''>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin=''
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap'
                        rel='stylesheet'
                    />
                    <link rel='icon' href='/favicon-32x32.png' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
