import { CollectionExtensions } from "./collection";
import { ConversionExtensions } from "./conversion";
import { MathExtensions } from "./math";
import { EnumExtensions } from "./enum";

export class Utils {
	math = new MathExtensions();
	conversion = new ConversionExtensions();
	collection = new CollectionExtensions();
	enum = new EnumExtensions();
}

export let utils = new Utils();
export default utils;