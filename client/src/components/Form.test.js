import React from "react";
import FormikForm from "./Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe('<FormikForm />', () => {
    it('renders without crashing', () => {
      render(<FormikForm />);
    });
  
   it("submit fires", () => {
    // FormikForm renders..Test
    const { getByText } = render(<FormikForm />);
    const submit = getByText(/^submit$/i)
    
    fireEvent.click(submitButton);
    getByText(/Submit: 1/)
    //Click button to see if event fires..Test
   })
  });