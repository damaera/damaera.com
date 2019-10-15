// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import GlobalStyle from "../components/GlobalStyle";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,600i,800,800i&display=block"
            rel="stylesheet"
          />
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <GlobalStyle />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
