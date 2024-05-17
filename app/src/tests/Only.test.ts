import { describe, expect, it } from "vitest";

describe("it Skip", () => {
  it.only.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])(".add(%i, %i)", (a, b, expected) => {
    expect(a + b).toBe(expected);
  });

  it("will not be run", () => {
    expect(1 / 0).toBe(Infinity);
  });
});
