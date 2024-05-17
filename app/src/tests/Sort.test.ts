import { describe, expect, it } from "vitest";

describe("Test sort", () => {
  it("Sample Sort", () => {
    expect.soft(1 + 1).toBe(3); // mark the test as fail and continue
    expect(1 + 2).toBe(2); // failed and terminate the test, all previous errors will be output
    expect.soft(1 + 3).toBe(4); // do not run
  });
});
