import * as React from "react";

function GlobalStyle() {
  return (
    <div>
      <style jsx global>{`
        body {
          background-color: #fff;
          color: #333;
        }
        html {
          margin: 0;
        }
        html {
          font-family: "EB Garamond", serif;
          font-variant-numeric: oldstyle-nums;
        }
        p {
          font-size: 18px;
        }

        blockquote p {
          font-size: 24px;
        }
        pre,
        code {
          font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier,
            monospace;
        }
        em strong,
        strong em {
          font-family: monospace;
          font-weight: normal;
          font-size: 0.7em;
          font-style: normal;
          padding: 2px 5px;
          border-radius: 2px;
          border: solid 1px #ddd;
          background: #e6e6e6;
        }
        iframe {
          max-width: 100%;
        }
        p a {
          text-decoration: underline;
        }
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        * {
          transition: all 0.2s;
        }

        .article p,
        .article li {
          font-size: 20px;
          line-height: 1.6;
        }
        .article h4 {
          font-size: 1.4rem;
          margin-bottom: 0;
        }
        .article caption {
          display: block;
          width: 100%;
          padding: 10px;
        }
        .article caption p {
          font-size: 1rem;
          margin: 0;
        }
        p.article-desc {
          margin-top: 5px;
          font-size: 1.6rem;
        }
      `}</style>
    </div>
  );
}

export default GlobalStyle;
