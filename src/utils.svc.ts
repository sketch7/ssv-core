import {MathService} from "./math.svc";
import {StringService} from "./string.svc";
import {CollectionService} from "./collection.svc";
import {EnumService} from "./enum.svc";

export class Utils {
	math = new MathService();
	string = new StringService();
	collection = new CollectionService();
	enum = new EnumService();
}

export let utils = new Utils();
export default utils;