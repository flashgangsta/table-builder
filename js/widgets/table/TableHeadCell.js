import {TableCell} from "./TableCell.js";

export class TableHeadCell extends TableCell {
    constructor() {
        super();
    }
}

customElements.define("el-table-head-cell", TableHeadCell);