import { Dictionary } from "./collection";

/**
 * parseBool configuration to add/remove possible values.
 *
 * @type {Dictionary<boolean>}
 */
export const PARSE_BOOL_CONFIG: Dictionary<boolean> = {
	// truthy
	true: true,
	1: true,
	yes: true,
	y: true,
	on: true,
	// falsy
	false: false,
	0: false,
	no: false,
	n: false,
	off: false
};

/**
 * Interpolates the string with the data specified by using the prefix (:) default as token.
 * e.g. 'api/:lang/games' => 'api/en/games'
 * @param {string} value string template to interpolate
 * @param {*} data data object to replace tokens
 * @param {string} [interpolatePrefix=":"] interpolation token prefix
 * @returns {string} string interpolated
 */
export function interpolate(value: string, data: any, interpolatePrefix = ":") {
	data = data || {};
	let interpolatedValue = value.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");

	for (const property in data) {
		if (data.hasOwnProperty(property)) {
			interpolatedValue = interpolatedValue.replace(`${interpolatePrefix}${property}`, data[property]);
		}
	}

	return interpolatedValue;
}

/**
 * Parses a value to boolean "humanized", which can also be configured in order to add additional values. e.g.
 * true => `"true"`, `"1"`, `"yes"`, `"y"`, `"on"`
 * false => `"false"`, `"0"`, `"no"`, `"n"`, `"off"` or non existent.
 * @param value value to parse
 * @returns `true`, `false`
 */
export function parseBool(value: string | boolean | number | null | undefined) {
	return PARSE_BOOL_CONFIG[(String(value).toLowerCase())] || false;
}

/**
 * Replaces all occurrences with a string with the specified value.
 *
 * @param {string} value value to search within
 * @param {string} search value to search for e.g. "//"
 * @param {string} replacement value to replace with e.g. "/"
 * @returns {string} Returns string with the replaced values
 */
export function replaceAll(value: string, search: string | RegExp, replacement: string): string {
	return value.replace(new RegExp(`${search}`, "g"), replacement);
}