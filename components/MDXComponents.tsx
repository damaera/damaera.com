import * as React from "react";

import Link from "next/link";
import Header from "./Header";
import { useRouter } from "next/router";

function Wrapper(props: any) {
  const router = useRouter();

  const url = router.pathname.split("/blog/")[1];

  return (
    <>
      <Header />
      <div id={`blog-${url}`} data-morph-ms="300">
        <main {...props} />
      </div>
      <style jsx>{`
        main {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </>
  );
}

const BlockContainer = (props: any) => (
  <div>
    {props.children}
    <style jsx>
      {`
        div {
          max-width: 540px;
          margin: 0 auto;
        }
      `}
    </style>
  </div>
);

const Paragraph = (props: any) => (
  <>
    <BlockContainer>
      <p {...props}></p>
    </BlockContainer>
    <style jsx>
      {`
        p {
          padding: 10px 0;
          font-size: 1.2em;
        }
      `}
    </style>
  </>
);

const Heading1 = (props: any) => (
  <>
    <BlockContainer>
      <h1 {...props}></h1>
    </BlockContainer>
    <style jsx>
      {`
        h1 {
        }
      `}
    </style>
  </>
);
const Heading2 = (props: any) => (
  <>
    <BlockContainer>
      <h2 {...props}></h2>
    </BlockContainer>
    <style jsx>
      {`
        h1 {
        }
      `}
    </style>
  </>
);
const Heading3 = (props: any) => (
  <>
    <BlockContainer>
      <h2 {...props}></h2>
    </BlockContainer>
    <style jsx>
      {`
        h1 {
        }
      `}
    </style>
  </>
);

const UL = (props: any) => (
  <>
    <BlockContainer>
      <ul {...props}></ul>
    </BlockContainer>
    <style jsx>
      {`
        ul {
        }
      `}
    </style>
  </>
);

const List = (props: any) => (
  <>
    <li {...props}></li>
    <style jsx>
      {`
        li {
          font-size: 1.2em;
        }
      `}
    </style>
  </>
);

export default {
  wrapper: Wrapper,
  p: Paragraph,
  li: List,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  ul: UL
};
