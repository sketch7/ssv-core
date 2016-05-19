import { Dictionary } from "./collection";
export declare class StringExtensions {
    /**
     * parseBool configuration to add/remove possible values.
     *
     * @type {Dictionary<boolean>}
     */
    parseBoolConfig: Dictionary<boolean>;
    /**
     * Interpolates the string with the data specified by using the prefix (:) default as token.
     * e.g. 'api/:lang/games' => 'api/en/games'
     * @param {string} value string template to interpolate
     * @param {*} data data object to replace tokens
     * @param {string} [interpolatePrefix=":"] interpolation token prefix
     * @returns interpolated string
     */
    interpolate(value: string, data: any, interpolatePrefix?: string): string;
    /**
     * Parses a value to boolean "humanized", which can also be configured in order to add additional values. e.g.
     * true => "true", "1", "yes", "y", "on"
     * false => "false", "0", "no", "n", "off"
     * @param {string} value string value to parse
     * @returns {boolean} true or false
     */
    parseBool(value: string): boolean;
    /**
     * Replaces all occurrences with a string with the specified value.
     *
     * @param {string} value value to search within
     * @param {string} search value to search for e.g. "//"
     * @param {string} replacement value to replace with e.g. "/"
     * @returns {string} Returns string with the replaced values
     */
    replaceAll(value: string, search: string, replacement: string): string;
}
