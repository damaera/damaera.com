import * as React from "react";
import { NextPage } from "next";

import Header from "../../components/Header";

const ARTICLES = [
  {
    title: "",
    url: "2019-10-12-test.mdx"
  }
];

const BlogIndexPage: NextPage = () => {
  return (
    <div>
      <Header />
      <style jsx>{``}</style>
    </div>
  );
};

export default BlogIndexPage;
