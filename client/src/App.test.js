import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { descriptions } from "jest-config";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders without crashing", () => {
    render(<App />);
  });
  it("renders form", () => {
    const app = render(<App />);
    app.getAllByAltText(/form/i);
  });
});
