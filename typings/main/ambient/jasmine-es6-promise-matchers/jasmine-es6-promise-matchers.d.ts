// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/e69fe60f2d6377ea4fae539493997b098f52cad1/jasmine-es6-promise-matchers/jasmine-es6-promise-matchers.d.ts
// Type definitions for jasmine-es6-promise-matchers
// Project: https://github.com/bvaughn/jasmine-es6-promise-matchers
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module JasminePromiseMatchers  {
	export function install():void;
	export function uninstall():void;
}

declare module jasmine {
	
	interface Matchers {
		/**
		 * Verifies that a Promise is (or has been) rejected.
		 */
		toBeRejected(done?: () => void): boolean;
		
		/**
		 * Verifies that a Promise is (or has been) rejected with the specified parameter.
		 */
		toBeRejectedWith(value: any, done?: () => void): boolean;
		
		/**
		 * Verifies that a Promise is (or has been) resolved.
		 */
		toBeResolved(done?: () => void): boolean;
		
		/**
		 * Verifies that a Promise is (or has been) resolved with the specified parameter.
		 */
		toBeResolvedWith(value: any, done?: () => void): boolean;
	}
}