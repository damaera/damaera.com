import * as React from "react";
import { NextPage } from "next";

//@ts-ignore
import { Link as PrismicLink, RichText, Date } from "prismic-reactjs";

import Header from "../../components/Header";
import Link from "next/link";
import { client, Prismic } from "../../components/prismic";

interface DataContent {
  content: any;
  title: any;
}

interface BlogSlugProps {
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

const BlogSlugPage: NextPage<BlogSlugProps> = props => {
  console.log(props.document);
  return (
    <div>
      <Header />
      <div>
        <RichText render={props.document && props.document.data.content} />
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
