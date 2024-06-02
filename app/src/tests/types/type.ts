export type CreateObjectType<T, K> = (a: T, b: K) => { a: T; b: K };
export type CreateArrayType<T> = (...elements: [...T[]]) => T[];
