import Layout from "../components/layout";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { getTypeInfo } from "../redux/sync";
import Link from "next/link";

const Type = props => (
  <Layout>
    <div>
      <Link href="/info">
        <button>
          <a>Back to info</a>
        </button>
      </Link>
      <div className="container">
        <h2>Name</h2> <p>{props.router.query.name}</p>
        <h2>Alias</h2> <p>{props.selectedType[0].alias}</p>
        <h2>Shadow</h2> <p>{props.selectedType[0].shadow}</p>
        <h2>Drive</h2> <p>{props.selectedType[0].drive}</p>
        <h2>Aspect</h2> <p>{props.selectedType[0].aspect}</p>
        <h2>Role</h2> <p>{props.selectedType[0].role}</p>
        <h2>Method</h2> <p>{props.selectedType[0].method}</p>
      </div>
    </div>
    <style jsx>{`
      button {
        z-index: 2;
        font-size: 1.5rem;
        position: relative;
        cursor: pointer;
        border-radius: 9999em;
        background: #067df7;
        color: white;
      }
      button:hover {
        background: white;
        color: #067df7;
      }
      .container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100vw;
        padding-top: 1rem;
        z-index: 1;
      }
      .container > h2 {
        margin: 0 auto;
        padding: 0.5rem;
      }
      .container > p {
        margin: 0 auto;
        padding: 0;
      }
    `}</style>
  </Layout>
);

Type.getInitialProps = async function({ store, query }) {
  store.dispatch(getTypeInfo(query.name));
};

export default withRouter(connect(state => state)(Type));
