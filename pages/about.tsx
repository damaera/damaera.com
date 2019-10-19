import * as React from "react";
import { NextPage } from "next";
import ParticleLogo from "../components/ParticleLogo";
import Header from "../components/Header";
import Head from "next/head";

const CAREERS = [
  {
    time: "Oct 2018 - Sept 2019",
    company: "Bukalapak",
    url: "https://bukalapak.com",
    role: "Software Engineer, Frontend"
  },
  {
    time: "Jul 2018 - Oct 2018",
    company: "A Job Thing",
    url: "https://ajobthing.com",
    role: "Front end developer"
  },
  {
    time: "Aug 2016 - Jun 2018",
    company: "Arena.id",
    url: "https://arena.id",
    role: "Front end developer"
  },
  {
    time: "Aug 2016 - Jun 2018",
    company: "Sebangsa Network",
    url: "https://sebangsa.com",
    role: "Front end developer"
  }
];

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      </Head>
      <Header />
      <div className="wrapper">
        <div className="about flex" id="profile" data-morph-ms="300">
          <div id="particle-logo" className="particle-logo" data-morph-ms="300">
            <ParticleLogo />
          </div>
          <div style={{ flex: 1, padding: 20 }}>
            <h2>
              Lutfi Mukti <strong>Damaera</strong>
            </h2>
            <p className="title">
              <i>Software Engineer</i>
            </p>

            <h3>Careers</h3>
            {CAREERS.map((career, index) => (
              <div className="career" key={index}>
                <a target="_blank" href={career.url}>
                  <div className="company">{career.company}</div>
                </a>
                <div className="time">{career.time}</div>
                <div className="role">{career.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .particle-logo {
          width: 400px;
          height: 450px;
        }
        h2 {
          font-weight: 200;
          font-size: 2em;
          margin-bottom: 0;
        }
        h3 {
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 1em;
        }
        strong {
          font-weight: bold;
        }
        .about p.title {
          font-size: 24px;
          margin-top: 0;
          padding-bottom: 24px;
          border-bottom: solid 1px #ddd;
        }
        .work {
          padding: 20px;
        }
        .role {
          font-style: italic;
        }
        .career {
          padding-bottom: 30px;
        }
        .career .company {
          font-weight: bold;
          padding-bottom: 5px;
          font-size: 1.2rem;
        }
        .company:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 1000px) {
          .about {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
