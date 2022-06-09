import {PageBase} from "../base/PageBase.js";

export class FormPageView extends PageBase {
    constructor(...attributes) {
        super(attributes);
    }
}

customElements.define("el-form-page", FormPageView);