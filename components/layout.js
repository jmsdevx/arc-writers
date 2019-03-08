import Nav from "./nav";
import { withRouter } from "next/router";

const Layout = props => (
  <div className="layout">
    <Nav />
    {props.children}
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        text-align: center;
      }
      a {
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default withRouter(Layout);
