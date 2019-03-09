import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const window = global;
window._env_ = {
  API_URL: "https://github.com"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
