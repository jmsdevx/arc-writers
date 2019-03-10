import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const links = [
  { href: "http://arcapi.org", label: "API" },
  { href: "https://github.com/archetype-api/arc-api", label: "Github" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = props => (
  <nav>
    <ul>
      <li>
        <Link href="/quiz">
          <a>Quiz</a>
        </Link>
        <Link href="/info">
          <a>Info</a>
        </Link>
        <Link href="/tool">
          <a>Tool</a>
        </Link>
      </li>
      <li>
        {props.router.pathname === "/" ? null : (
          <Link href="/">
            <a className="title">Arc Writer's Tool</a>
          </Link>
        )}
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a target="_blank">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 1rem;
      }
      li {
        display: flex;
        padding: 1rem;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 1rem;
        padding: 1rem;
      }
      .title {
        font-size: 2rem;
      }
    `}</style>
  </nav>
);

export default withRouter(Nav);
