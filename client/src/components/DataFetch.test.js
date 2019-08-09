import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import DataFetch from "./DataFetch";

describe("<DataFetch />", () => {
  it("renders without crashing", () => {
    render(<DataFetch />);
  });
  it("renders without crashing", () => {
    render(<DataFetch />);
  });
  it("renders Food Stuffs", () => {
    const data = render(<DataFetch />);
    data.getAllByAltText(/food stuffs/i);
  });
});
