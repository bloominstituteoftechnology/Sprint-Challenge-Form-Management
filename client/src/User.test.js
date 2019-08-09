import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

afterEach(rtl.cleanup);

describe("<User />", () => {
  it("renders User without crashing", () => {
    render(<User />);
  });
});
