import {ElementBase} from "../../base/ElementBase.js";
import {TableHeadCell} from "./TableHeadCell.js";
import {TableCell} from "./TableCell.js";

export class TableRow extends ElementBase {
    constructor(isHeadRow=false, pageConfig) {
        super();

        const cellClass = isHeadRow ? TableHeadCell : TableCell;

        const colTitles = ["Actions", ...pageConfig.getConfig().cols.map(col => col.displayName)];
        colTitles.forEach((item) => {
            const cell = new cellClass();
            cell.textContent = item;
            this.append(cell);
        })
    }
}

customElements.define("el-table-row", TableRow);