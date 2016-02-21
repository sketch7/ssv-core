import {MathService} from "./math";
import {StringService} from "./string";
import {CollectionService} from "./collection";
import {EnumService} from "./enum";

export class Utils {
	math = new MathService();
	string = new StringService();
	collection = new CollectionService();
	enum = new EnumService();
}

export let utils = new Utils();
export default utils;