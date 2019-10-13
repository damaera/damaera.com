import * as React from "react";
import { NextPage } from "next";
import ParticleLogo from "../components/ParticleLogo";
import Header from "../components/Header";

const CAREERS = [
  {
    time: "Oct 2018 - present",
    company: "Bukalapak",
    role: "Software Engineer, Frontend",
    description: "creating, maintaining website mitra.bukalapak.com with vue.js"
  },
  {
    time: "Jul 2018 - Oct 2018",
    company: "A Job Thing",
    role: "Software Engineer, Frontend",
    description: "Creating, maintaining website mitra.bukalapak.com with vue.js"
  },
  {
    time: "Aug 2016 - Jun 2018",
    company: "Sebangsa Network",
    role: "Software Engineer, Frontend",
    description: "Creating, maintaining website mitra.bukalapak.com with vue.js"
  }
];

const IndexPage: NextPage = () => {
  return (
    <div>
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
          <p className="title">Software Engineer</p>
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

export default IndexPage;
