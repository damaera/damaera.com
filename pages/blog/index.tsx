import * as React from "react";
import { NextPage } from "next";

import Link from "next/link";
import Head from "next/head";

import Header from "../../components/Header";

import { client, Prismic } from "../../components/prismic";
//@ts-ignore
import { Link as BlogLink, RichText, Date } from "prismic-reactjs";
const BlogIndexPage: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <Header />
      <div className="wrapper flex">
        <div className="filter-wrapper">
          <h2 className="title">
            Programming, <br />
            Science <em>&</em> Others
          </h2>
          <p>Coretan</p>
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="blog-wrapper">
          {props.documents.results.map((doc: any) => (
            <>
              <Link href="/blog/[slug]" as={`/blog/${doc.uid}`}>
                <a>
                  <div className="blog-item">
                    <h3>{RichText.asText(doc.data.title)}</h3>
                    <p>{RichText.asText(doc.data.description)}</p>
                    <div>
                      {new Intl.DateTimeFormat("id", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }).format(Date(doc.first_publication_date))}
                    </div>
                  </div>
                </a>
              </Link>
            </>
          ))}
        </div>
      </div>
      <style jsx>{`
        input {
        }
        .flex {
          flex-wrap: wrap;
        }
        h2.title {
          font-weight: 200;
          font-size: 3.2em;
          margin-bottom: 0;
        }
        .filter-wrapper {
          max-width: 500px;
          margin-right: 40px;
        }
        .blog-wrapper {
          flex: 1;
          min-width: 200px;
          max-width: 500px;
          padding-top: 40px;
        }
        .blog-item {
          border-bottom: solid 1px #ddd;
          padding: 20px 0;
        }
        a:hover h3 {
          text-decoration: underline;
        }
        .blog-item h3 {
          font-size: 1.5rem;
          margin: 0;
        }
        .blog-item p {
          margin: 0;
          padding: 5px 0;
        }
        .blog-item div {
          font-size: 0.8em;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

BlogIndexPage.getInitialProps = async ctx => {
  try {
    const documents = await client.query(
      Prismic.Predicates.at("document.type", "article-blog"),
      {}
    );
    return { documents };
  } catch (e) {
    console.log(e);
    return {};
  }
};

export default BlogIndexPage;
