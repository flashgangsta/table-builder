import {FormPageView} from "./FormPageView.js";
import {TablePageView} from "./TablePageView.js";

export class PageBuilder {

    static get TYPE_TABLE() {return "table"};
    static get TYPE_FORM() {return "form"};

    constructor() {

    }

    createPage(model, type, pageName) {
        let result = null;
        switch (type) {
            case PageBuilder.TYPE_TABLE: {
                result = TablePageView;
                break
            }
            case PageBuilder.TYPE_FORM: {
                result = FormPageView;
                return
            }
            default: {
                throw new Error("Table type not set");
            }
        }
        return new result(model);
    }
}