import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { connect } from "react-redux";

const InfoLink = props => (
  <Link as={`/${props.name}`} href={`/type?name=${props.name}`}>
    <a>{props.name}</a>
  </Link>
);

const Info = props => (
  <Layout>
    <h1>ArcheType Info</h1>
    <div className="container">
      {props.data.types &&
        props.data.types.map((e, i) => (
          <InfoLink key={e.archetype_id} name={e.name} />
        ))}
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

Info.getInitialProps = async function() {
  const res = await fetch("http://arcapi.org/api/types");
  const data = await res.json();
  console.log(data);

  return {
    data: data
  };
};

export default connect(state => state)(Info);
