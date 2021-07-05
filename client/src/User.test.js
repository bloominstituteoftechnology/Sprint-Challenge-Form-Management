import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("<User />", () => {
  it("renders User without crashing", () => {
    render(<User user={{ username: "bob", password: "asbds" }} />);
  });
});
