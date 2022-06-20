import {ElementBase} from "../../base/ElementBase.js";
import {TableRow} from "./TableRow.js";

export class TableHead extends ElementBase {
    constructor(pageConfig) {
        super();
        const tableRow = new TableRow(true, pageConfig);
        this.append(tableRow);
    }
}

customElements.define("el-table-head", TableHead);