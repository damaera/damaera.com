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
        <div className="about flex" id="profile" data-morph-ms="300">
          <div id="particle-logo" className="particle-logo" data-morph-ms="300">
            <ParticleLogo />
          </div>
          <div style={{ flex: 1, padding: 20 }}>
            <h2>
              Lutfi Mukti <strong>Damaera</strong>
            </h2>
            <p className="title">Software Engineer</p>

            <h3>Careers</h3>
            {CAREERS.map((career, index) => (
              <div className="career" key={index}>
                <div className="company">{career.company}</div>
                <div className="time">{career.time}</div>
                <div className="role">{career.role}</div>
                <p>
                  <div>{career.description}</div>
                </p>
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
        .career {
          padding-top: 20px;
        }
        .career .company {
          font-weight: bold;
          padding-bottom: 5px;
          font-size: 1.1em;
        }
        .career p {
          margin-top: 5px;
          font-size: 18px;
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
