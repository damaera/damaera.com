import * as React from "react";
import { NextPage } from "next";
import ParticleLogo from "../components/ParticleLogo";
import Header from "../components/Header";

import { client } from "../components/prismic";
import Head from "next/head";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="particle-wrap">
          <div id="particle-logo" className="particle-logo" data-morph-ms="300">
            <ParticleLogo />
          </div>
        </div>
        <div id="profile" data-morph-ms="300">
          <h2>
            Lutfi Mukti <strong>Damaera</strong>
          </h2>
          <p className="title">
            <i>Software Engineer</i>
          </p>
        </div>
      </div>
      <style jsx>{`
        .particle-logo {
          width: 400px;
          height: 450px;
        }
        strong {
          font-weight: bold;
        }
        .particle-wrap {
          display: flex;
          height: 450px;
          justify-content: center;
        }
        h2 {
          font-weight: 200;
          font-size: 2em;
          margin-bottom: 0;
          text-align: center;
        }
        strong {
          font-weight: bold;
        }
        p.title {
          font-size: 24px;
          margin-top: 0;
          padding-bottom: 24px;
          border-bottom: solid 1px #ddd;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const res = await client.query("", {});
  console.log(res);
  return {};
};

export default IndexPage;
