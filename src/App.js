import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import logo from "./logo.svg";
import "./App.css";

const history = createBrowserHistory();

const View = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>API_URL: {window._env_.API_URL}</p>
    </header>
  </div>
);

const ComponentWithNestedRoute = ({ match }) => (
  <div>
    <Route
      path={`${match.url}`}
      exact
      component={() => (
        <div>
          root
          <View />
        </div>
      )}
    />
    <Route
      path={`${match.url}/nested`}
      exact
      component={() => (
        <div>
          nested <View />
        </div>
      )}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={View} />
        <Route path="/nestable" component={ComponentWithNestedRoute} />
        <Route component={() => <div>404</div>} />
      </Router>
    );
  }
}

export default App;
