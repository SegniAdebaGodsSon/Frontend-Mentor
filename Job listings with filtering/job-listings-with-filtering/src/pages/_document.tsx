import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html
                lang='en'
                className='scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-desaturated-dark-cyan'
            >
                <Head>
                    {/* icon */}
                    <link
                        rel='shortcut icon'
                        href='/images/favicon-32x32.png'
                        type='image/x-icon'
                    />

                    {/* font */}
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
                        href='https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap'
                        rel='stylesheet'
                    />
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
