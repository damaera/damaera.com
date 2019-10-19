import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { client, Prismic } from "./prismic";
import SyntaxHighlighter from "react-syntax-highlighter";

//@ts-ignore
import { Link as PrismicLink, RichText, Date } from "prismic-reactjs";

let theme: any;
try {
  let {
    atomOneDark
  } = require("react-syntax-highlighter/dist/esm/styles/hljs");
  theme = atomOneDark;
} catch (e) {
  console.log(e);
}

console.log(theme);

interface Image {
  url: string;
  dimensions: {
    height: number;
    width: number;
  };
  alt: string | null;
}

interface Cover extends Image {
  mobile: Image;
}

interface Body {
  slice_type:
    | "richtext"
    | "code__block"
    | "divider"
    | "quote"
    | "image"
    | "embed";
  primary: any;
}

interface DataContent {
  content: any;
  title: any;
  description: any;
  cover: Cover | {};
  body: Body[];
}

interface Props {
  document?: {
    id: string;
    uid?: string;
    type: string;
    href: string;
    tags: string[];
    slugs: string[];
    lang?: string;
    alternate_languages: string[];
    first_publication_date: string | null;
    last_publication_date: string | null;
    data: DataContent;
  };
}

function ArticleWrapper(props: any) {
  return (
    <div className="article-wrapper">
      {props.children}
      <style jsx global>
        {`
          .article-wrapper {
            max-width: 600px;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}

function Block({ body }: { body: Body }) {
  switch (body.slice_type) {
    case "richtext":
      return (
        <ArticleWrapper>
          <RichText render={body.primary.rich_text} />
        </ArticleWrapper>
      );
    case "image":
      const { image, position, caption } = body.primary;
      return (
        <div className="article-image">
          <figure>
            <img src={image.url} />
            <div>
              <RichText render={caption} />
            </div>
          </figure>
          <style jsx>
            {`
              .article-image {
                max-width: 600px;
                margin: 0 auto;
                border: solid 1px #ddd;
              }
              .article-image img {
                width: 100%;
                height: 100%;
              }
            `}
          </style>
        </div>
      );
    case "embed":
      const { url } = body.primary;
      return (
        <div className="article-embed">
          {url.type === "link" ? (
            <a href={url.url} target="_blank">
              <div className="article-embed-link">
                <img src={url.thumbnail_url} />
                <div>
                  <h5>{url.title}</h5>
                  <span>{url.url}</span>
                </div>
              </div>
            </a>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: url.html }} />
          )}
          <style jsx>{`
            .article-embed {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px 0;
            }
            .article-embed-link {
              display: flex;
              align-items: center;
            }
            .article-embed-link img {
              width: 160px;
              height: 160px;
              object-fit: cover;
            }
            .article-embed-link h5 {
              margin-top: 0;
              margin-bottom: 10px;
              font-size: 20px;
            }
            .article-embed-link div {
              border: solid 1px #ddd;
              height: 100%;
              border-left: none;
              padding: 20px;
              padding-left: 40px;
              position: relative;
              left: -20px;
            }
            .article-embed-link:hover div {
              left: 0;
            }
            .article-embed-link span {
              font-style: italic;
            }
            .article-embed-link:hover span {
              text-decoration: underline;
            }
          `}</style>
        </div>
      );
    case "divider":
      return (
        <div>
          <style jsx>{`
            div {
              max-width: 200px;
              border: none;
              border-bottom: solid 1px #ddd;
              outline: none;
              margin: 40px auto;
            }
          `}</style>
        </div>
      );

    case "quote":
      const { content } = body.primary;
      return (
        <blockquote>
          <RichText render={content} />
          <style jsx>{`
            blockquote {
              max-width: 600px;
              padding-left: 20px;
              border-top: solid 1px #ddd;
              border-bottom: solid 1px #ddd;
              margin: 0 auto;
            }
          `}</style>
        </blockquote>
      );

    case "code__block":
      const { content: codeContent, syntax } = body.primary;
      return (
        <ArticleWrapper>
          <SyntaxHighlighter language={syntax} style={theme}>
            {RichText.asText(codeContent)}
          </SyntaxHighlighter>
        </ArticleWrapper>
      );

    default:
      return <div></div>;
  }
}

function ArticleRenderer({ document }: Props) {
  return (
    <div>
      <ArticleWrapper>
        <h1>{RichText.asText(document!.data.title)}</h1>
        <p>{RichText.asText(document!.data.description)}</p>
        <style jsx>{`
          h1 {
            font-weight: 200;
            font-size: 3.2em;
            margin-bottom: 0;
          }
        `}</style>
      </ArticleWrapper>

      {document!.data.body!.map(body => (
        <Block body={body} />
      ))}
    </div>
  );
}

export default ArticleRenderer;
