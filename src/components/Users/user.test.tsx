import { render, screen } from "@testing-library/react";
import Users from "./User";

// getByPlaceholderText
// getByText => div, p, span etc.
// getByLabelText and its selector options
// getByAltText
// getByTitle
// getByDisplayValue
// getByTestId => data-testId

it("should render the component", () => {
  render(<Users />);

  const element = screen.getByRole("textbox", {
    name: "Name",
  });

  const element2 = screen.getByPlaceholderText("User name");
  const element3 = screen.getByText("Enter the form data");
  const element4 = screen.getByLabelText("Email");
  const element5 = screen.getByAltText("person");
  const element6 = screen.getByTitle("open");
  const element7 = screen.getByDisplayValue("farhan");
  const element8 = screen.getByTestId("paragraph");
  const headingELement = screen.getByRole("heading", {
    level: 2,
  });
  const button = screen.queryByRole("button", {
    name: "Submit",
  });

  expect(button).not.toBeInTheDocument();

  expect(element8).toBeInTheDocument();
  expect(element7).toBeInTheDocument();
  expect(element6).toBeInTheDocument();
  expect(element5).toBeInTheDocument();
  expect(element4).toBeInTheDocument();
  expect(element3).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
  expect(element).toBeInTheDocument();
  expect(headingELement).toBeInTheDocument();
});
