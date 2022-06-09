import {ElementBase} from "./ElementBase.js";

export class PageBase extends ElementBase {

    model = null;

    constructor(model) {
        super();
        this.model = model;
    }

    render() {
        document.querySelector("body").append(this);
    }
}