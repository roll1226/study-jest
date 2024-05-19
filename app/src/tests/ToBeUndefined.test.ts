import { describe, expect } from "vitest";

const getApplesFromStock = (stock: string) => {
  if (stock === "Bill") return 13;
};

describe("it toBeUndefined", () => {
  expect(getApplesFromStock("Mary")).toBeUndefined();
});
