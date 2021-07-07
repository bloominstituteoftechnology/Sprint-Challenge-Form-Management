import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import SprintForm from "./SprintForm";

describe("<SprintForm />", () => {
  it("renders without crashing", () => {
    render(<SprintForm />);
  });
  it("renders Username", () => {
    const food = render(<SprintForm />);
    food.getAllByAltText(/username/i);
  });
  //   it("clicks", () => {
  //     let clicked = false;
  //     const { getByText } = render(
  //       <SprintForm submit={() => (clicked = true)} />
  //     );
  //     const submitButton = getByText(/submit/i);
  //     fireEvent.click(submitButton);
  //     expectExport(clicked).toBe(true);
  //   });
});
