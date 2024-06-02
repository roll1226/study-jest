import { describe, expect, it } from "vitest";

const sum = (a: number, b: number) => {
  return a + b;
};

describe("sum 関数のテスト", () => {
  it("2と3を足した結果が5以下であることを確認", () => {
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  it("7と2を足した結果が10以下であることを確認", () => {
    expect(sum(7, 2)).toBeLessThanOrEqual(10);
  });

  it("5と6を足した結果が10以下でないことを確認", () => {
    expect(sum(5, 6)).not.toBeLessThanOrEqual(10);
  });
});
