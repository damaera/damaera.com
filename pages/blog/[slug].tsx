import * as React from "react";
import { NextPage } from "next";

//@ts-ignore
import { Link as PrismicLink, RichText, Date } from "prismic-reactjs";

import Header from "../../components/Header";
import Link from "next/link";
import { client } from "../../components/prismic";
import ArticleRenderer from "../../components/ArticleRenderer";

const BlogSlugPage: NextPage<any> = ({ document: doc }) => {
  React.useEffect(() => {
    try {
      let script = document.createElement("script");
      let anchor = document.getElementById("comments");
      script.setAttribute("src", "https://utteranc.es/client.js");
      script.setAttribute("crossorigin", "anonymous");
      script.setAttribute("async", "true");
      script.setAttribute("repo", "damaera/damaera.com");
      script.setAttribute("issue-term", "pathname");
      script.setAttribute("theme", "github-light");
      anchor!.appendChild(script);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <ArticleRenderer document={doc} />
      </div>

      <div id="comments"></div>
      <style jsx>{`
        #comments {
          margin-top: 40px;
        }
      `}</style>
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
