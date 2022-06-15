import {ElementBase} from "./ElementBase.js";
import {DataModel} from "../models/DataModel.js";

export class PageBase extends ElementBase {

    #pageConfig;
    #dataModel = new DataModel();

    constructor(pageConfig) {
        super();
        this.#pageConfig = pageConfig;
    }

    get pageConfig() {
        return this.#pageConfig;
    }

    get dataModel() {
        return this.#dataModel;
    }

    render() {
        document.querySelector("body").append(this);
    }
}