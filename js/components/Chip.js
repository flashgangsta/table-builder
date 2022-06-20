import {ElementBase} from "../base/ElementBase.js";

export class Chip extends ElementBase {
    constructor(label) {
        super();
        this.textContent = label || "";
    }
}

customElements.define("el-chip", Chip);