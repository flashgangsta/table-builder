import {ElementBase} from "../../base/ElementBase.js";
import {TableCaption} from "./TableCaption.js";
import {TableHead} from "./TableHead.js";
import {TableBody} from "./TableBody.js";

export class Table extends ElementBase {
    constructor(pageConfig) {
        super();

        const caption = new TableCaption(pageConfig);
        const head = new TableHead(pageConfig);
        const body = new TableBody(pageConfig);

        this.append(caption);
        this.append(head);
        this.append(body);
    }
}

customElements.define("el-table", Table);