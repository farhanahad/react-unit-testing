import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render hello world correctly", () => {
  render(<App />);
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
