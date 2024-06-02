import { describe, expect, it } from "vitest";

type CreateObjectType<T> = (a: T, b: T) => { a: T; b: T };
type CreateArrayType<T> = (...elements: [...T[]]) => T[];

const createObject: CreateObjectType<unknown> = (a, b) => {
  return { a, b };
};

const createArray: CreateArrayType<unknown> = (...elements) => {
  return elements;
};

// sum.test.js

describe("関数の戻り値のテスト", () => {
  it("オブジェクトが等しいことを確認", () => {
    expect(createObject(1, 2)).toEqual({ a: 1, b: 2 });
  });

  it("配列が等しいことを確認", () => {
    expect(createArray(1, 2, 3)).toEqual([1, 2, 3]);
  });

  it("ネストされたオブジェクトが等しいことを確認", () => {
    expect(createObject({ nested: 1 }, 2)).toEqual({ a: { nested: 1 }, b: 2 });
  });

  it("ネストされた配列が等しいことを確認", () => {
    expect(createArray([1, 2], [3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
