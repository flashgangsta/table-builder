import {FormPageView} from "./FormPageView.js";
import {TablePageView} from "./TablePageView.js";

export class PageBuilder {

    static get TYPE_TABLE() {return "table"};
    static get TYPE_FORM() {return "form"};

    constructor() {

    }

    createPage(pageConfig) {
        let result = null;
        switch (pageConfig) {
            case PageBuilder.TYPE_TABLE: {
                result = TablePageView;
                break;
            }
            case PageBuilder.TYPE_FORM: {
                result = FormPageView;
                break;
            }
            default: {
                throw new Error("Table type not set");
            }
        }
        return new result(pageConfig);
    }
}