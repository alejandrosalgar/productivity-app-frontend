import { render, screen } from "@testing-library/react";

import Login from "./Login";

/* This is a test that is testing the App component. It is testing that the heading is correct. */
describe("Login", () => {
  it("should have exact title", () => {
    /* Rendering the App component. */
    render(<Login />);

    /* Getting the element with the test id of "app-header-heading". */
    const mainHeading = screen.getByTestId("login-title");

    /* Checking that the innerHTML of the element with the test id of "app-header-heading" is equal to
    "Productivity Tracker". */
    expect(mainHeading.innerHTML).toBe("Login");
  });

  it("should have email input and its label", () => {
    render(<Login />);

    const input = screen.getByLabelText("Email:", { selector: 'input' });

    expect(input != undefined).toBeTruthy();
  });

  it("should have password input and its label", () => {
    render(<Login />);

    const input = screen.getByLabelText("Password:", { selector: 'input' });

    expect(input != undefined).toBeTruthy();
  });

  it("should have a button to login", () => {
    render(<Login />);

    const button = screen.getByRole('button', {
      name: /Login/i
    })

    expect(button != undefined).toBeTruthy();
  });
});
