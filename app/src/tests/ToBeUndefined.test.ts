import { describe, expect, it } from "vitest";

describe("toBeUndefinedの使用例", () => {
  it("変数が未定義であることを確認する", () => {
    let value;
    expect(value).toBeUndefined();
  });

  it("関数の戻り値が未定義であることを確認する", () => {
    function doNothing() {}
    expect(doNothing()).toBeUndefined();
  });

  it("明示的にundefinedを設定した変数が未定義であることを確認する", () => {
    const value = undefined;
    expect(value).toBeUndefined();
  });

  it("未定義ではない場合のテスト", () => {
    const value = 0;
    expect(value).not.toBeUndefined();
  });
});
