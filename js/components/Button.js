import {ElementBase} from "../base/ElementBase.js";

export class Button extends ElementBase {
    constructor(label) {
        super();
        const button = document.createElement("button");
        button.textContent = label;
        this.append(button);
    }
}

window.customElements.define("el-button", Button);