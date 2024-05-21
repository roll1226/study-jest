import { describe, expect, it } from "vitest";

describe("toBeGreaterThanの使用例", () => {
  it("値が基準値より大きいことを確認する", () => {
    expect(10).toBeGreaterThan(5);
  });

  it("値が基準値より小さい場合は失敗する", () => {
    expect(5).not.toBeGreaterThan(10);
  });

  it("値が基準値と等しい場合は失敗する", () => {
    expect(10).not.toBeGreaterThan(10);
  });

  it("負の値の比較", () => {
    expect(-5).toBeGreaterThan(-10);
  });

  it("小数の比較", () => {
    expect(3.14).toBeGreaterThan(3);
  });
});
