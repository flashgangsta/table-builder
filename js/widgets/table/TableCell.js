import {ElementBase} from "../../base/ElementBase.js";
import {TableHeadCell} from "./TableHeadCell.js";

export class TableCell extends ElementBase {
    constructor() {
        super();
    }
}

customElements.define("el-table-cell", TableCell);