import { describe, expect, it } from "vitest";
import { CreateArrayType, CreateObjectType } from "./types/type";

describe("関数の戻り値のテスト", () => {
  it("オブジェクトが等しいことを確認", () => {
    const createObject: CreateObjectType<number, number> = (a, b) => {
      return { a, b };
    };

    expect(createObject(1, 2)).toEqual({ a: 1, b: 2 });
  });

  it("配列が等しいことを確認", () => {
    const createArray: CreateArrayType<number> = (...elements) => {
      return elements;
    };

    expect(createArray(1, 2, 3)).toEqual([1, 2, 3]);
  });

  it("ネストされたオブジェクトが等しいことを確認", () => {
    const createObject: CreateObjectType<{ nested: number }, number> = (
      a,
      b
    ) => {
      return { a, b };
    };

    expect(createObject({ nested: 1 }, 2)).toEqual({ a: { nested: 1 }, b: 2 });
  });

  it("ネストされた配列が等しいことを確認", () => {
    const createArray: CreateArrayType<[number, number, ...number[]]> = (
      ...elements
    ) => {
      return elements;
    };

    expect(createArray([1, 2], [3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
