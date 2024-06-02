import { describe, expect, it } from "vitest";
import { CreateArrayType, CreateObjectType } from "./types/type";

describe("関数の戻り値のテスト", () => {
  it("オブジェクトが等しいことを確認", () => {
    const createObject: CreateObjectType<number, number> = (a, b) => {
      return { a, b };
    };

    expect(createObject(1, 2)).toStrictEqual({ a: 1, b: 2 });
  });

  it("配列が等しいことを確認", () => {
    const createArray: CreateArrayType<number> = (...elements) => {
      return elements;
    };

    expect(createArray(1, 2, 3)).toStrictEqual([1, 2, 3]);
  });

  it("未定義のプロパティがあるオブジェクトは等しくない", () => {
    const createObject: CreateObjectType<number, undefined> = (a, b) => {
      return { a, b };
    };

    expect(createObject(1, undefined)).not.toStrictEqual({ a: 1 });
  });

  it("ネストされたオブジェクトが等しいことを確認", () => {
    const createObject: CreateObjectType<{ nested: number }, number> = (
      a,
      b
    ) => {
      return { a, b };
    };

    expect(createObject({ nested: 1 }, 2)).toStrictEqual({
      a: { nested: 1 },
      b: 2,
    });
  });

  it("ネストされた配列が等しいことを確認", () => {
    const createArray: CreateArrayType<[number, number, ...number[]]> = (
      ...elements
    ) => {
      return elements;
    };

    expect(createArray([1, 2], [3, 4])).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
