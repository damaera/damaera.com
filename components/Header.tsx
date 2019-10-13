import * as React from "react";

import Link from "next/link";

function Header() {
  return (
    <div className="wrapper">
      <header className="flex">
        <Link href="/">
          <a>
            <h1>Damaera</h1>
          </a>
        </Link>
        <div className="flex nav">
          <Link href="/about">
            <a>
              <span>About</span>
            </a>
          </Link>
          <a>
            <span>Work</span>
          </a>
          <a>
            <span>Contact</span>
          </a>
          <Link href="/blog">
            <a>
              <span>Blog</span>
            </a>
          </Link>
        </div>
        <style jsx>{`
          header {
            padding: 20px;
          }
          h1 {
            margin: 0;
          }
          @media screen and (max-width: 1000px) {
            h1 {
              text-align: center;
              width: 100%;
              cursor: pointer;
            }
            header {
              flex-direction: column;
            }
          }
         .nav span {
           padding: 10px 10px;
           font-size: .8rem;
           font-weight: bold;
           cursor: pointer;
         }
         .nav span:hover {
           text-decoration: underline;
         }
        }
      `}</style>
      </header>
    </div>
  );
}

export default Header;
