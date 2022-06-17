import {ConfigBase} from "../../base/ConfigBase.js";
import {ColDataBuilder} from "../../utils/ColDataBuilder.js";

export class HappifiersConfigBase extends ConfigBase {
    constructor() {
        super();
    }

    getBaseConfig(...args) {
        return super.getBaseConfig({
            url: "/happifiers"
        }, ...args);
    }
}