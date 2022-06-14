import {ElementBase} from "./base/ElementBase.js";

export class Scene extends ElementBase {
    constructor() {
        super();
    }
}

customElements.define("el-scene", Scene);