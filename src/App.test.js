import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

/* This is a test that is testing the App component. It is testing that the heading is correct. */
describe("App", () => {
  it("should have exact heading", () => {
    /* Rendering the App component. */
    render(<App />);

    /* Getting the element with the test id of "app-header-heading". */
    const mainHeading = screen.getByTestId("app-header-heading");

    /* Checking that the innerHTML of the element with the test id of "app-header-heading" is equal to
    "Productivity Tracker". */
    expect(mainHeading.innerHTML).toBe("Productivity Tracker");
  });

  it("should have activity input and its label", () => {
    render(<App />);

    const input = screen.getByLabelText("Activity:", { selector: 'input' });

    expect(input != undefined).toBeTruthy();
  });

  it("should have time taken input and its label", () => {
    render(<App />);

    const input = screen.getByLabelText("Time Taken:", { selector: 'input' });

    expect(input != undefined).toBeTruthy();
  });

  it("should have a button to add", () => {
    render(<App />);


    const button = screen.getByRole('button', {
      name: /Add/i
    })

    expect(button != undefined).toBeTruthy();
  });
});
