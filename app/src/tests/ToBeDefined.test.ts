import { describe, expect, it } from "vitest";

describe("toBeDefinedの使用例", () => {
  it("変数が定義されていることを確認する", () => {
    const value = 1;
    expect(value).toBeDefined();
  });

  it("オブジェクトのプロパティが定義されていることを確認する", () => {
    const obj = { a: 1 };
    expect(obj.a).toBeDefined();
  });

  it("関数の戻り値が定義されていることを確認する", () => {
    function returnValue() {
      return "hello";
    }
    expect(returnValue()).toBeDefined();
  });

  it("nullが定義されていることを確認する", () => {
    const value = null;
    expect(value).toBeDefined();
  });

  it("未定義でないことを確認する", () => {
    let value;
    expect(value).not.toBeDefined();
  });
});
