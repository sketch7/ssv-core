import { StringExtensions } from "./string";

describe("StringExtensionsSpecs", () => {

	let SUT = new StringExtensions();

	describe("interpolateSpecs", () => {

		describe("given default prefix (:)", () => {

			it("should replace :id with data param", () => {
				let result = SUT.interpolate("api/portal/:id", { id: "sketch7" });
				expect(result).toBe("api/portal/sketch7");
			});

		});

		describe("given multiple params", () => {

			it("should replace :id and :product with data params respectively", () => {
				let result = SUT.interpolate("api/:product/:id", { id: "sketch7", product: "cms" });
				expect(result).toBe("api/cms/sketch7");
			});

		});

		describe("given custom prefix (--)", () => {

			it("should replace --id with data param", () => {
				let result = SUT.interpolate("api/portal/--id", { id: "sketch7" }, "--");
				expect(result).toBe("api/portal/sketch7");
			});

		});
	});

	describe("parseBoolSpecs", () => {

		describe("given a truthy value", () => {

			describe("when value of 'true'", () => {

				it("should return true", () => {
					let result = SUT.parseBool("true");
					expect(result).toBe(true);
				});

			});

			describe("when value of '1'", () => {

				it("should return true", () => {
					let result = SUT.parseBool("1");
					expect(result).toBe(true);
				});

			});

			describe("when value of 'yes'", () => {

				it("should return true", () => {
					let result = SUT.parseBool("yes");
					expect(result).toBe(true);
				});

			});

			describe("when value of 'y'", () => {

				it("should return true", () => {
					let result = SUT.parseBool("y");
					expect(result).toBe(true);
				});

			});

			describe("when value of 'on'", () => {

				it("should return true", () => {
					let result = SUT.parseBool("on");
					expect(result).toBe(true);
				});

			});
		});

		describe("given a falsy value", () => {

			describe("when value of 'false'", () => {

				it("should return false", () => {
					let result = SUT.parseBool("false");
					expect(result).toBe(false);
				});

			});

			describe("when value of '0'", () => {

				it("should return false", () => {
					let result = SUT.parseBool("0");
					expect(result).toBe(false);
				});

			});

			describe("when value of 'no'", () => {

				it("should return false", () => {
					let result = SUT.parseBool("no");
					expect(result).toBe(false);
				});

			});

			describe("when value of 'n'", () => {

				it("should return false", () => {
					let result = SUT.parseBool("n");
					expect(result).toBe(false);
				});

			});

			describe("when value of 'off'", () => {

				it("should return false", () => {
					let result = SUT.parseBool("off");
					expect(result).toBe(false);
				});

			});
		});


	});

	describe("replaceAllSpecs", () => {

		describe("given string", () => {

			describe("when having one match occurrence", () => {

				it("should replace initial value", () => {
					let result = SUT.replaceAll("//hello", "//", "/");
					expect(result).toBe("/hello");
				});

			});

			describe("when having multiple match occurrences", () => {

				it("should replace all values", () => {
					let result = SUT.replaceAll("//hello/xxx//yyy", "//", "/");
					expect(result).toBe("/hello/xxx/yyy");
				});

			});

			describe("when having zero match occurrence", () => {

				it("should remain the same", () => {
					let result = SUT.replaceAll("/hello/xxx/yyy", "//", "/");
					expect(result).toBe("/hello/xxx/yyy");
				});

			});
		});

	});

});