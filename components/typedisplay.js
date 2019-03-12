import Layout from "../components/layout";
import { connect } from "react-redux";
import getTypeInfo from "../redux/async";

const TypeDisplay = props => <Layout>{props.name}</Layout>;

TypeDisplay.getInitialProps = async function({ store }) {
  store.dispatch(getTypeInfo(props.name));
};

export default connect(state => state)(TypeDisplay);
