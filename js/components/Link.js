import {ElementBase} from "../base/ElementBase.js";
import {ElementEvent} from "../events/ElementEvent.js";

export class Link extends ElementBase {
    #label;
    #href;

    constructor(label, href) {
        super();
        this.#label = label;
        this.#href = href;
        this.addEventListener(ElementEvent.ON_ELEMENT_APPENDED, this.#onLinkAppended);
    }

    #onLinkAppended() {
        this.removeEventListener(ElementEvent.ON_ELEMENT_APPENDED, this.#onLinkAppended);
        const a = document.createElement("a");
        a.textContent = this.#label;
        this.#href && a.setAttribute("href", this.#href);
        this.append(a);
    }
}

customElements.define("el-link", Link);