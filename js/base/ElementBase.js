import {ElementEvent} from "../events/ElementEvent.js";

export class ElementBase extends HTMLElement {

    constructor() {
        super();
    }

    append(...nodes) {
        super.append(...nodes);
        [...nodes].forEach((node) => {
           node.dispatchEvent(new ElementEvent(ElementEvent.ON_ELEMENT_APPENDED));
        });
    }

    remove() {
        super.remove();
        this.dispatchEvent(new ElementEvent(ElementEvent.ON_ELEMENT_REMOVED));
    }
}