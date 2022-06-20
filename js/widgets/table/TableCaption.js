import {ElementBase} from "../../base/ElementBase.js";
import {Chip} from "../../components/Chip.js";

export class TableCaption extends ElementBase {
    constructor(pageConfig) {
        super();
        const title = document.createElement("h3");
        const countChip = new Chip();

        title.classList.add("caption-title");
        title.textContent = pageConfig.getConfig().caption;
        countChip.classList.add("loading");
        title.append(countChip)
        this.append(title);
    }
}

customElements.define("el-table-caption", TableCaption);