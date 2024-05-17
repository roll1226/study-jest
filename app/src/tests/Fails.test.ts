import { describe, expect, it } from "vitest";

describe("Test Fails", () => {
  it.fails("Test Fails", () => {
    expect(10).toBe(1);
  });

  it.fails.each([
    { a: 1, b: 1, expected: 1 },
    { a: 1, b: 2, expected: 5 },
    { a: 2, b: 1, expected: 4 },
  ])(".add($a, $b)", ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
});
