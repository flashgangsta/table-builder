import {FormPageView} from "./FormPageView.js";
import {TablePageView} from "./TablePageView.js";
import {ConfigBase} from "../base/ConfigBase.js";

export class PageBuilder {

    constructor() {

    }

    createPage(pageConfig) {
        let config = pageConfig.getConfig();
        let result = null;

        switch (config.viewType) {
            case ConfigBase.VIEW_TYPE_TABLE: {
                result = TablePageView;
                break;
            }
            case ConfigBase.VIEW_TYPE_FORM: {
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