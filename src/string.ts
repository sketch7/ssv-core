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

}