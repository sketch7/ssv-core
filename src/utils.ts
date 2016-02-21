import {MathExtensions} from "./math";
import {StringExtensions} from "./string";
import {CollectionExtensions} from "./collection";
import {EnumExtensions} from "./enum";

export class Utils {
	math = new MathExtensions();
	string = new StringExtensions();
	collection = new CollectionExtensions();
	enum = new EnumExtensions();
}

export let utils = new Utils();
export default utils;