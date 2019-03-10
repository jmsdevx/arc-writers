import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import reducer from "../redux/reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

const middlewares = applyMiddleware(thunk, logger);

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState, middlewares);
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
