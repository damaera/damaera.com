import App, { Container } from "next/app";
import React from "react";
//@ts-ignore
import { MDXProvider } from "@mdx-js/react";
//@ts-ignore
import MorphTransition from "nextjs-morph-page";

import MDXComponents from "../components/MDXComponents";

export default class MyApp extends App {
  //@ts-ignore
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <MDXProvider components={MDXComponents}>
          <MorphTransition timeout={300} classNames="morph">
            <Component {...pageProps} />
          </MorphTransition>
        </MDXProvider>
        <style jsx global>{`
          .morph.enter {
            opacity: 0;
          }
          .morph.enter.active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .morph.exit {
            opacity: 1;
          }
          .morph.exit.active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    );
  }
}