import { describe, expect, it } from "vitest";

const sum = (a: number, b: number) => {
  return a + b;
};

describe("sum 関数のテスト", () => {
  it("6と4を足した結果が10以上であることを確認", () => {
    expect(sum(6, 4)).toBeGreaterThanOrEqual(10);
  });

  it("10と5を足した結果が15以上であることを確認", () => {
    expect(sum(10, 5)).toBeGreaterThanOrEqual(15);
  });

  it("3と4を足した結果が10未満であることを確認", () => {
    expect(sum(3, 4)).not.toBeGreaterThanOrEqual(10);
  });
});
