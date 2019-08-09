import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import FormikForm from "./TheForm";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

it("FormikForm renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormikForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
   it("submit fires", () => {
    // FormikForm renders..Test
    const { getByText } = render(<FormikForm />);
  
  
     //Click button to see if event fires..Test
    fireEvent.click(submitButton);
  
  });