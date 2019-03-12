import Layout from "../components/layout";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { getTypeInfo } from "../redux/sync";

import TypeDisplay from "../components/typedisplay";

const Type = props => (
  <Layout>
    <h2>Name</h2> <p>{props.router.query.name}</p>
    <h2>Alias</h2> <p>{props.selectedType[0].alias}</p>
    <h2>Shadow</h2> <p>{props.selectedType[0].shadow}</p>
    <h2>Drive</h2> <p>{props.selectedType[0].drive}</p>
    <h2>Aspect</h2> <p>{props.selectedType[0].aspect}</p>
    <h2>Role</h2> <p>{props.selectedType[0].role}</p>
    <h2>Method</h2> <p>{props.selectedType[0].method}</p>
  </Layout>
);

Type.getInitialProps = async function({ store, query }) {
  store.dispatch(getTypeInfo(query.name));
};

export default withRouter(connect(state => state)(Type));
