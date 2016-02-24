export class StringExtensions {

	/**
	 * Interpolates the string with the data specified by using the prefix (:) default as token.
	 * e.g. 'api/:lang/games' => 'api/en/games'
	 * @param {string} value string template to interpolate
	 * @param {*} data data object to replace tokens
	 * @param {string} [interpolatePrefix=":"] interpolation token prefix
	 * @returns interpolated string
	 */
	interpolate(value: string, data: any, interpolatePrefix = ":") {
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
	 * Parses a value to boolean "humanized" e.g.
	 * true => "true", "1", "yes", "y", "on"
	 * true => "false", "0", "no", "n", "off"
	 * @param {string} value to parse
	 * @returns {boolean} true or false
	 */
	parseBool(value: string): boolean {
		switch (String(value).toLowerCase()) {
			case "true":
			case "1":
			case "yes":
			case "y":
			case "on":
				return true;
			case "false":
			case "0":
			case "no":
			case "n":
			case "off":
				return false;
			default:
				return false;
		}
	}
}