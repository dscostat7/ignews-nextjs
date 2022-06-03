import Document, { Html, Head, Main, NextScript } from "../../node_modules/next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:wght@400;700;900&display=swap" />
                    <title>ig.nesw</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}