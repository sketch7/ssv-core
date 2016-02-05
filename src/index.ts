
export {ISelectable} from "./collection.svc";
export {KeyCode} from "./keycode";

import {StringService} from "./string.svc";
import {MathService} from "./math.svc";
import {EnumService} from "./enum.svc";
import {CollectionService} from "./collection.svc";

export class Utils {
	string = new StringService();
	math = new MathService();
	enums = new EnumService();
	collection = new CollectionService();
}

export var utils = new Utils();