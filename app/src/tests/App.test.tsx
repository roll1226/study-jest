import App from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("App", () => {
  it("sample test", () => {
    render(<App />);

    screen.debug();
  });
});
