import { describe, expect, it } from "vitest";

describe("toBeNaNの使用例", () => {
  it("値がNaNであることを確認する", () => {
    const value = NaN;
    expect(value).toBeNaN();
  });

  it("0を0で割った結果はNaNでないことを確認する", () => {
    const value = 0 / 1;
    expect(value).not.toBeNaN();
  });

  it("数値として評価されない文字列を数値に変換するとNaNになる", () => {
    const value = parseInt("abc");
    expect(value).toBeNaN();
  });

  it("数値として評価される文字列を数値に変換するとNaNでない", () => {
    const value = parseInt("123");
    expect(value).not.toBeNaN();
  });

  it("計算が失敗するとNaNになる", () => {
    const value = Math.sqrt(-1);
    expect(value).toBeNaN();
  });
});
