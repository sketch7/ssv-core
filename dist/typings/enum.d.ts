export declare class EnumService {
    /**
     * Gets all names of the enum as an array.
     * @param {any} e enum to get data of.
     * @returns enum definition names as a string array e.g. ["Elite", "Boss", "Normal", "RaidBoss"].
     */
    getNames(e: any): string[];
    /**
     * Gets all names of the enum as an array with values kebab'ed cased characters e.g. "raid-boss"
     * @param {any} e enum to get data of.
     * @returns enum definition names as a string array with kebab case e.g. ["elite", "boss", "normal", "raid-boss"].
     */
    getNamesKebab(e: any): string[];
    /**
     * Gets all values of the enum as an array.
     * @param {any} e enum to get data of.
     * @returns enum values as number array e.g. [1, 2, 3, 4]
     */
    getValues(e: any): number[];
}
