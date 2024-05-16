import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Hello from "../../components/Hello";

test("renders the correct content", async () => {
  render(<Hello name="World" />);
  expect(await screen.findByText("Hello, World!")).toBeInTheDocument();
});
