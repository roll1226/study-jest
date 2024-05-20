import { describe, expect, it } from "vitest";

describe("toBeFalsyの使用例", () => {
  it("falseは偽として評価される", () => {
    expect(false).toBeFalsy();
  });

  it("0は偽として評価される", () => {
    expect(0).toBeFalsy();
  });

  it("空文字列は偽として評価される", () => {
    expect("").toBeFalsy();
  });

  it("nullは偽として評価される", () => {
    expect(null).toBeFalsy();
  });

  it("undefinedは偽として評価される", () => {
    let value;
    expect(value).toBeFalsy();
  });

  it("NaNは偽として評価される", () => {
    expect(NaN).toBeFalsy();
  });

  it("偽でない値は偽として評価されない", () => {
    expect(true).not.toBeFalsy();
    expect(1).not.toBeFalsy();
    expect("hello").not.toBeFalsy();
    expect({}).not.toBeFalsy();
    expect([]).not.toBeFalsy();
  });
});
