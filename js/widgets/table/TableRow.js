import {ElementBase} from "../../base/ElementBase.js";
import {TableHeadCell} from "./TableHeadCell.js";
import {TableCell} from "./TableCell.js";

export class TableRow extends ElementBase {
    constructor(isHeadRow=false, pageConfig) {
        super();

        const cellClass = isHeadRow ? TableHeadCell : TableCell;
        const config = pageConfig.getConfig();

        const colTitles = [isHeadRow ? "Actions" : "", ...config.cols.map(col => col.displayName)];

        if(isHeadRow) {
            //in head
            colTitles.forEach((item) => {
                const cell = new cellClass();
                cell.textContent = item;
                this.append(cell);
            })
        } else {
            //in body
            this.classList.add("loading");
            const colFields = ["", ...config.cols.map(col => col.fieldName)];
            for(let i=0; i < colTitles.length; i++) {
                const cell = new cellClass();
                cell.setAttribute("data-field", colFields[i]);
                this.append(cell);
            }
        }
    }
}

customElements.define("el-table-row", TableRow);