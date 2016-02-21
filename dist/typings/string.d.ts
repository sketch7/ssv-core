export declare class StringExtensions {
    /**
     * Interpolates the string with the data specified by using the prefix (:) default as token.
     * e.g. 'api/:lang/games' => 'api/en/games'
     * @param {string} value string template to interpolate
     * @param {*} data data object to replace tokens
     * @param {string} [interpolatePrefix=":"] interpolation token prefix
     * @returns interpolated string
     */
    interpolate(value: string, data: any, interpolatePrefix?: string): string;
}
