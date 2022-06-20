import {ElementBase} from "../../base/ElementBase.js";
import {TableHeadCell} from "./TableHeadCell.js";

export class TableCell extends ElementBase {
    constructor() {
        super();
        if(!(this instanceof TableHeadCell)) {
            this.classList.add("loading");
        }
    }
}

customElements.define("el-table-cell", TableCell);