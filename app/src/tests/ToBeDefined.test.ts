import { describe, expect } from "vitest";

const getApples = () => {
  return 3;
};

describe("it toBeDefined", () => {
  expect(getApples()).toBeDefined();
});
