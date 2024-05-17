import { describe, expect, it } from "vitest";

// テスト対象の関数
const fetchData = async (url: string): Promise<unknown> => {
  const response = await fetch(url);
  return response.json();
};

describe("it Skip", () => {
  // 並行して実行される非同期テスト
  it.concurrent("fetches data from API 1", async () => {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon/1");
    expect(data).toBeDefined();
  });

  it.concurrent("fetches data from API 2", async () => {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon/2");
    expect(data).toBeDefined();
  });

  it.concurrent("fetches data from API 3", async () => {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon/3");
    expect(data).toBeDefined();
  });
});
