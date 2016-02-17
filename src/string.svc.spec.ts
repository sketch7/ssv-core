import {StringService} from "./string.svc";

describe("StringService", () => {

	let stringService = new StringService();

	describe("interpolate", () => {

		describe("given default prefix (:)", () => {

			it("should replace :id with data param", () => {

				let result = stringService.interpolate("api/portal/:id", { id: "sketch7" });
				expect(result).toBe("api/portal/sketch7");
			});

		});

		describe("given multiple params", () => {

			it("should replace :id and :product with data params respectively", () => {

				let result = stringService.interpolate("api/:product/:id", { id: "sketch7", product: "cms" });
				expect(result).toBe("api/cms/sketch7");
			});

		});

		describe("given custom prefix (--)", () => {

			it("should replace --id with data param", () => {

				let result = stringService.interpolate("api/portal/--id", { id: "sketch7" }, "--");
				expect(result).toBe("api/portal/sketch7");
			});

		});
	});

});