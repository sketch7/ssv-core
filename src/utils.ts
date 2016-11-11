import { CollectionExtensions } from "./collection";
import { ConversionExtensions } from "./conversion";
import { MathExtensions } from "./math";
import { StringExtensions } from "./string";
import { EnumExtensions } from "./enum";

export class Utils {
	math = new MathExtensions();
	conversion = new ConversionExtensions();
	string = new StringExtensions();
	collection = new CollectionExtensions();
	enum = new EnumExtensions();
}

export let utils = new Utils();
export default utils;