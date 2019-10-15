import * as React from "react";
import { NextPage } from "next";

import Header from "../../components/Header";
import Link from "next/link";

const ARTICLES = [
  {
    title: "How i create this site",
    desc: "Rebuilding this site with Next.js and MDX",
    url: "2019-10-12-how-i-create-this-site"
  }
];

const BlogIndexPage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        {ARTICLES.map((article, i) => (
          <Link href={`/blog/${article.url}`} key={i}>
            <div id={`blog-${article.url}`} data-morph-ms="300">
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{``}</style>
    </div>
  );
};

export default BlogIndexPage;
