import Button from "@/components/Button";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("Test Button Components", () => {
  it("Sample Button Test", () => {
    render(<Button label="Button" />);

    screen.debug();
  });
});
