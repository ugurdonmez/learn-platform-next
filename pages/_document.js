import Document, { Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />

                </Head>
                <body className="layoutCss">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}