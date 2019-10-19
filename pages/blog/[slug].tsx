import * as React from "react";
import { NextPage } from "next";

//@ts-ignore
import { Link as PrismicLink, RichText, Date } from "prismic-reactjs";

import Header from "../../components/Header";
import Link from "next/link";
import { client } from "../../components/prismic";
import ArticleRenderer from "../../components/ArticleRenderer";

const BlogSlugPage: NextPage<any> = ({ document }) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <ArticleRenderer document={document} />
      </div>
      <style jsx>{``}</style>
    </div>
  );
};

BlogSlugPage.getInitialProps = async ctx => {
  const slug = ctx.query.slug;
  try {
    const document = await client.getByUID("article-blog", slug as string, {});
    return { document };
  } catch (e) {
    return {};
  }
};

export default BlogSlugPage;
