import { describe, expect, it } from "vitest";

class MyClass {
  constructor(public name: string) {}
}

class AnotherClass {
  constructor(public age: number) {}
}

describe("toBeInstanceOfの使用例", () => {
  it("オブジェクトが特定のクラスのインスタンスであることを確認する", () => {
    const instance = new MyClass("example");
    expect(instance).toBeInstanceOf(MyClass);
  });

  it("オブジェクトが別のクラスのインスタンスでないことを確認する", () => {
    const instance = new MyClass("example");
    expect(instance).not.toBeInstanceOf(AnotherClass);
  });

  it("Arrayのインスタンスを確認する", () => {
    const array = [] as object;
    expect(array).toBeInstanceOf(Array);
  });

  it("Dateのインスタンスを確認する", () => {
    const date = new Date();
    expect(date).toBeInstanceOf(Date);
  });

  it("nullはインスタンスではないことを確認する", () => {
    const value = null;
    expect(value).not.toBeInstanceOf(Object);
  });
});
