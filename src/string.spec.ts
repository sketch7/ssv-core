import * as SUT from "./string";

describe("String Utils", () => {

	describe("interpolateSpecs", () => {

		describe("given default prefix (:)", () => {
			it("should replace :id with data param", () => {
				const result = SUT.interpolate("api/portal/:id", { id: "sketch7" });
				expect(result).toBe("api/portal/sketch7");
			});
		});

		describe("given multiple params", () => {
			it("should replace :id and :product with data params respectively", () => {
				const result = SUT.interpolate("api/:product/:id", { id: "sketch7", product: "cms" });
				expect(result).toBe("api/cms/sketch7");
			});
		});

		describe("given custom prefix (--)", () => {
			it("should replace --id with data param", () => {
				const result = SUT.interpolate("api/portal/--id", { id: "sketch7" }, "--");
				expect(result).toBe("api/portal/sketch7");
			});
		});
	});

	describe("parseBoolSpecs", () => {
		describe("given a truthy value", () => {
			const truthyValues = [
				true,
				"true",
				"yes",
				"y",
				"on",
				"1",
				1,
			];

			it("should return true", () => {
				for (const value of truthyValues) {
					const result = SUT.parseBool(value);
					expect(result).toBe(true);
				}
			});
		});

		describe("given a falsy value", () => {
			const falsyValues = [
				false,
				"false",
				"0",
				0,
				"no",
				"n",
				"off",
				null,
				undefined
			];

			it("should return false", () => {
				for (const value of falsyValues) {
					const result = SUT.parseBool(value);
					expect(result).toBe(false);
				}
			});
		});

		describe("given an unknown value", () => {
			const falsyValues = [
				"xxx",
				null,
				undefined
			];

			it("should return false", () => {
				for (const value of falsyValues) {
					const result = SUT.parseBool(value);
					expect(result).toBe(false);
				}
			});

		});

	});

	describe("replaceAllSpecs", () => {

		describe("given string", () => {

			describe("when having one match occurrence", () => {
				it("should replace initial value", () => {
					const result = SUT.replaceAll("//hello", "//", "/");
					expect(result).toBe("/hello");
				});
			});

			describe("when having multiple match occurrences", () => {
				it("should replace all values", () => {
					const result = SUT.replaceAll("//hello/xxx//yyy", "//", "/");
					expect(result).toBe("/hello/xxx/yyy");
				});
			});

			describe("when having zero match occurrence", () => {
				it("should remain the same", () => {
					const result = SUT.replaceAll("/hello/xxx/yyy", "//", "/");
					expect(result).toBe("/hello/xxx/yyy");
				});
			});

			describe("when search string is forward slash", () => {
				it("should replace correctly", () => {
					const result = SUT.replaceAll("bundle\\ssv-core.umd.js", "\\", "/");
					expect(result).toBe("bundle/ssv-core.umd.js");
				});
			});
		});

	});

});