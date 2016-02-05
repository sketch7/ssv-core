

export class StringService {

	interpolateUrl(url: string, data: any) {
		data = data || {};
		let interpolatedUrl = url.replace(/(\(\s*|\s*\)|\s*\|\s*)/g, "");

		for (const property in data) {
			if (data.hasOwnProperty(property)) {
				interpolatedUrl = interpolatedUrl.replace(`:${property}`, data[property]);
			}
		}

		return interpolatedUrl;
	}

}