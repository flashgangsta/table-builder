import {ElementBase} from "../../base/ElementBase.js";
import {TableCaption} from "./TableCaption.js";
import {TableHead} from "./TableHead.js";

export class Table extends ElementBase {
    constructor(pageConfig) {
        super();

        const caption = new TableCaption(pageConfig);
        const tableHead = new TableHead(pageConfig);

        this.append(caption);
        this.append(tableHead);
    }
}

customElements.define("el-table", Table);