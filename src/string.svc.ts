export class StringService {

	interpolate(value: string, data: any, interpolatePrefix = ":") {
		data = data || {};
		let interpolatedUrl = value.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");

		for (const property in data) {
			if (data.hasOwnProperty(property)) {
				interpolatedUrl = interpolatedUrl.replace(`${interpolatePrefix}${property}`, data[property]);
			}
		}

		return interpolatedUrl;
	}

}