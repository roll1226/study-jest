import { describe, expect, it } from "vitest";

describe("it toBeTruthy", () => {
  it("trueは真として評価される", () => {
    expect(true).toBeTruthy();
  });

  it("非空の文字列は真として評価される", () => {
    expect("hello").toBeTruthy();
  });

  it("非ゼロの数値は真として評価される", () => {
    expect(1).toBeTruthy();
    expect(-1).toBeTruthy();
  });

  it("オブジェクトは真として評価される", () => {
    expect({}).toBeTruthy();
  });

  it("配列は真として評価される", () => {
    expect([]).toBeTruthy();
  });

  it("null、undefined、false、0、空文字列は真として評価されない", () => {
    expect(null).not.toBeTruthy();
    expect(undefined).not.toBeTruthy();
    expect(false).not.toBeTruthy();
    expect(0).not.toBeTruthy();
    expect("").not.toBeTruthy();
  });
});
