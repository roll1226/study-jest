import { describe, expect, it } from "vitest";

describe("toBeNullの使用例", () => {
  it("値がnullであることを確認する", () => {
    const value = null;
    expect(value).toBeNull();
  });

  it("未定義の変数はnullでないことを確認する", () => {
    let value;
    expect(value).not.toBeNull();
  });

  it("空文字列はnullでないことを確認する", () => {
    const value = "";
    expect(value).not.toBeNull();
  });

  it("0はnullでないことを確認する", () => {
    const value = 0;
    expect(value).not.toBeNull();
  });

  it("undefinedはnullでないことを確認する", () => {
    const value = undefined;
    expect(value).not.toBeNull();
  });
});
