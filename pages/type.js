import Layout from "../components/layout";
import { withRouter } from "next/router";

const Type = props => (
  <Layout>
    <h1>{props.router.query.name}</h1>
  </Layout>
);

export default withRouter(Type);
