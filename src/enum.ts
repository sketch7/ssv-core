import { kebabCase } from "lodash";

/**
 * Typing constraint for Enums (non `const`).
 */
export interface Enum {
	[key: number]: string;
}

/**
 * Gets all names of the enum as an array.
 * @param e enum to get data of.
 * @returns enum definition names as a string array e.g. `["Elite", "Boss", "Normal", "RaidBoss"]`.
 */
export function getNames(e: Enum): string[] {
	return Object.keys(e).filter(v => isNaN(parseInt(v, 10)));
}

/**
 * Gets all names of the enum as an array with values kebab'ed cased characters e.g. `"raid-boss"`
 * @param e enum to get data of.
 * @returns enum definition names as a string array with kebab case e.g. `["elite", "boss", "normal", "raid-boss"]`.
 */
export function getNamesKebab(e: Enum): string[] {
	return Object.keys(e).filter(v => isNaN(parseInt(v, 10))).map(kebabCase);
}

/**
 * Gets all values of the enum as an array.
 * @param e enum to get data of.
 * @returns enum values as number array e.g. `[1, 2, 3, 4]`
 */
export function getValues(e: Enum): number[] {
	return Object.keys(e).map(v => parseInt(v, 10)).filter(v => !isNaN(v));
}