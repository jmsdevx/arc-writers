import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { connect } from "react-redux";
import { makeRequest } from "../redux/async";

const InfoLink = props => (
  <Link as={`/i/${props.name}`} href={`/type?name=${props.name}`}>
    <a>{props.name}</a>
  </Link>
);

const Info = props => (
  <Layout>
    <h1>All The Types</h1>
    <div className="container">
      {props.pending ? (
        <h1>Loading!</h1>
      ) : (
        props.types.all.map((e, i) => (
          <InfoLink key={e.archetype_id} name={e.name} />
        ))
      )}
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2rem;
      }
    `}</style>
  </Layout>
);

Info.getInitialProps = async function({ store }) {
  store.dispatch(makeRequest());
};

export default connect(state => state)(Info);
