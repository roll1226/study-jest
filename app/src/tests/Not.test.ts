import { describe, expect, it } from "vitest";

describe("Test sort", () => {
  it("Sample Sort", () => {
    const input = Math.sqrt(16);

    expect(input).not.to.equal(2); // chai API
    expect(input).not.toBe(2); // jest API
  });
});
