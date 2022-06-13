import {ConfigBase} from "../../base/ConfigBase.js";

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