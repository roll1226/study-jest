import { describe, expect, it } from "vitest";

describe("Test Fails", () => {
  it.skip.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])(".add(%i, %i)", (a, b, expected) => {
    expect(a + b).toBe(expected); // will not be run
  });

  it("will be run", () => {
    expect(1 / 0).toBe(Infinity);
  });
});
