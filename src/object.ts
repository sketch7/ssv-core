/** Type to limit typing to not be an array. */
// tslint:disable-next-line:interface-over-type-literal
export type NonArray = { forEach?: void };
// tslint:enable-next-line:interface-over-type-literal

/** Stricter `Partial` which allows only objects, no primitives (number, string, boolean) and no arrays. */
export type PartialObject<T> = Partial<T> & object & NonArray;