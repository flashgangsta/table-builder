import {HappifiersConfigBase} from "../HappifiersConfigBase.js";

export class AuthorsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    getBaseConfig() {
        return super.getBaseConfig({
            view: "AuthorsView"
        });
    }
}