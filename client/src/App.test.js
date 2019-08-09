import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    rtl.render(<App />);
  });
});
