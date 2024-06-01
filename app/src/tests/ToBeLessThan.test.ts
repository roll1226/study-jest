import { describe, expect, it } from "vitest";

const sum = (a: number, b: number) => {
  return a + b;
};

describe("sum 関数のテスト", () => {
  it("2と3を足した結果が10未満であることを確認", () => {
    expect(sum(2, 3)).toBeLessThan(10);
  });

  it("7と2を足した結果が10未満であることを確認", () => {
    expect(sum(7, 2)).toBeLessThan(10);
  });

  it("8 + 2と3を足した結果が10未満でないことを確認", () => {
    expect(sum(8, 2)).not.toBeLessThan(10);
  });

  it("5と6を足した結果が10未満でないことを確認", () => {
    expect(sum(5, 6)).not.toBeLessThan(10);
  });
});
