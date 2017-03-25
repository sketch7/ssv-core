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

			describe("when value of 'true'", () => {
				it("should return true", () => {
					const result = SUT.parseBool("true");
					expect(result).toBe(true);
				});
			});

			describe("when value of '1'", () => {
				it("should return true", () => {
					const result = SUT.parseBool("1");
					expect(result).toBe(true);
				});
			});

			describe("when value of 'yes'", () => {
				it("should return true", () => {
					const result = SUT.parseBool("yes");
					expect(result).toBe(true);
				});
			});

			describe("when value of 'y'", () => {
				it("should return true", () => {
					const result = SUT.parseBool("y");
					expect(result).toBe(true);
				});
			});

			describe("when value of 'on'", () => {
				it("should return true", () => {
					const result = SUT.parseBool("on");
					expect(result).toBe(true);
				});
			});
		});

		describe("given a falsy value", () => {

			describe("when value of 'false'", () => {
				it("should return false", () => {
					const result = SUT.parseBool("false");
					expect(result).toBe(false);
				});
			});

			describe("when value of '0'", () => {
				it("should return false", () => {
					const result = SUT.parseBool("0");
					expect(result).toBe(false);
				});
			});

			describe("when value of 'no'", () => {
				it("should return false", () => {
					const result = SUT.parseBool("no");
					expect(result).toBe(false);
				});
			});

			describe("when value of 'n'", () => {
				it("should return false", () => {
					const result = SUT.parseBool("n");
					expect(result).toBe(false);
				});
			});

			describe("when value of 'off'", () => {
				it("should return false", () => {
					const result = SUT.parseBool("off");
					expect(result).toBe(false);
				});
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
		});

	});

});