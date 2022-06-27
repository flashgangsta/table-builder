import {ElementBase} from "../../base/ElementBase.js";
import {TableRow} from "./TableRow.js";

export class TableBody extends ElementBase {
    constructor(pageConfig) {
        super();

        const config = pageConfig.getConfig();

        for(let i=0, len = config.recordsCount; i < len; i++) {
            const row = new TableRow(false, pageConfig);
            row.classList.add("loading");
            this.append(row);
        }
    }
}

customElements.define("el-table-body", TableBody);