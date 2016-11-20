/**
 * Rounds numeric value to a specified precision (default 2) e.g. 20.556 => 20.57.
 * @param value amount to round e.g. 20.556
 * @param precision decimal places to round to e.g. 2 (default: 2)
 * @returns {number} rounded number
 */
export function round(value: string | number, precision = 2): number {
	if (typeof value === "string") {
		return Number(parseFloat(value).toFixed(precision));
	} else {
		return Number(value.toFixed(precision));
	}
}