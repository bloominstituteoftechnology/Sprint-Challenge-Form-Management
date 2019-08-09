import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { descriptions } from "jest-config";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<SpringForm />", () => {
  it("renders without crashing", () => {
    render(<SprintForm />);
  });
  it("clicks", () => {
    let clicked = false;
    const { getByText } = render(
      <SprintForm submit={() => (clicked = true)} />
    );
    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);
    expectExport(clicked).toBe(true);
  });
});
