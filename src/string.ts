export class StringExtensions {

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