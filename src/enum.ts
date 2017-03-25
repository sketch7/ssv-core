 import { kebabCase } from "lodash";

/**
 * Gets all names of the enum as an array.
 * @param {any} e enum to get data of.
 * @returns enum definition names as a string array e.g. `["Elite", "Boss", "Normal", "RaidBoss"]`.
 */
export function getNames(e: any): string[] {
	return Object.keys(e).filter(v => isNaN(parseInt(v, 10)));
}

/**
 * Gets all names of the enum as an array with values kebab'ed cased characters e.g. `"raid-boss"`
 * @param {any} e enum to get data of.
 * @returns enum definition names as a string array with kebab case e.g. `["elite", "boss", "normal", "raid-boss"]`.
 */
export function getNamesKebab(e: any): string[] {
	return Object.keys(e).map(v => kebabCase(v)).filter(v => isNaN(parseInt(v, 10)));
}

/**
 * Gets all values of the enum as an array.
 * @param {any} e enum to get data of.
 * @returns enum values as number array e.g. `[1, 2, 3, 4]`
 */
export function getValues(e: any): number[] {
	return Object.keys(e).map(v => parseInt(v, 10)).filter(v => !isNaN(v));
}