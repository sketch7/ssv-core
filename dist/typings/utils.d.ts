import { CollectionExtensions } from "./collection";
import { ConversionExtensions } from "./conversion";
import { MathExtensions } from "./math";
import { StringExtensions } from "./string";
import { EnumExtensions } from "./enum";
export declare class Utils {
    math: MathExtensions;
    conversion: ConversionExtensions;
    string: StringExtensions;
    collection: CollectionExtensions;
    enum: EnumExtensions;
}
export declare let utils: Utils;
export default utils;
