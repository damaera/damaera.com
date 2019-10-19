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
          <title>Lutfi Mukti Damaera — Software Engineer</title>
          <meta
            name="description"
            content="Personal website and Blog by Damaera. Frontend Developer, Software Engineer & Science Enthusiast."
          />

          <meta property="og:title" content="Damaera, Software Engineer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://damaera.com" />
          <meta
            property="og:image"
            content="https://damaera.com/static/android-chrome-512x512.jpg"
          />
          <meta
            property="og:description"
            content="Personal website and Blog by Damaera. Frontend Developer, Software Engineer & Science Enthusiast."
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Damaera, Software Engineer" />
          <meta name="twitter:creator" content="@vamaera" />
          <meta
            name="twitter:description"
            content="Personal website and Blog by Damaera. Frontend Developer, Software Engineer & Science Enthusiast."
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest"></link>
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,800&display=block"
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
