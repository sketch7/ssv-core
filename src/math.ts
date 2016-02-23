
/**
 * Mathematics utilities and helpers.
 * 
 * @export
 * @class MathExtensions
 */
export class MathExtensions {

	/**
	 * Rounds numeric value to a specified precision (default 2) e.g. 20.556 => 20.57.
	 * @param value e.g. 20.556
	 * @param precision e.g. 2 (default: 2)
	 * @returns {20.56}
	 */
	round(value: string | number, precision = 2): number {
		if (typeof value === "string") {
			return Number(parseFloat(value).toFixed(precision));
		} else {
			return Number(value.toFixed(precision));
		}
	}

}