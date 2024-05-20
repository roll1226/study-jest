import { describe, expect, it } from "vitest";

describe("toBeTypeOfの使用例", () => {
  it("値が文字列であることを確認する", () => {
    const value = "hello";
    expect(value).toBeTypeOf("string");
  });

  it("値が数値であることを確認する", () => {
    const value = 123;
    expect(value).toBeTypeOf("number");
  });

  it("値がブール値であることを確認する", () => {
    const value = true;
    expect(value).toBeTypeOf("boolean");
  });

  it("値がオブジェクトであることを確認する", () => {
    const value = {};
    expect(value).toBeTypeOf("object");
  });

  it("値が関数であることを確認する", () => {
    const value = function () {};
    expect(value).toBeTypeOf("function");
  });

  it("配列はオブジェクトとして確認される", () => {
    const value = [] as object;
    expect(value).toBeTypeOf("object");
  });

  it("undefinedの値を確認する", () => {
    let value;
    expect(value).toBeTypeOf("undefined");
  });

  it("nullはオブジェクトとして確認される", () => {
    const value = null;
    expect(value).toBeTypeOf("object");
  });
});
