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
      `}</style>
    </div>
  );
}

export default GlobalStyle;
