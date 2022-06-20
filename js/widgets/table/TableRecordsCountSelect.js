import {Select} from "../../components/Select.js";

export class TableRecordsCountSelect extends Select {
    constructor() {
        super(5, 10, 50, 100);
    }
}

customElements.define("el-table-count-select", TableRecordsCountSelect);