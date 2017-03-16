/** Type to limit typing to not be an array. */
export type NonArray = { forEach?: void };

/** Stricter `Partial` which allows only objects, no primitives (number, string, boolean) and no arrays. */
export type PartialObject<T> = Partial<T> & object & NonArray;