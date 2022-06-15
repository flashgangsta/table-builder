import {PageBase} from "../base/PageBase.js";

export class TablePageView extends PageBase {

    constructor(pageConfig) {
        super(pageConfig);
        console.log(this.pageConfig);
        this.render();
    }

    render() {
        const config = this.pageConfig.getConfig();
        const colTitles = ["Actions", ...config.cols.map(col => col.displayName)];

        const table = document.createElement("table");
        const caption = document.createElement("caption");
        const tableHead = document.createElement("thead");
        const tr = document.createElement("tr");
        const tableBody = document.createElement("tbody");

        caption.textContent = config.caption;


        colTitles.map((el, index) => {
            const th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.textContent = el;
           tr.append(th);
        });

        table.append(caption);
        table.append(tableHead);
        table.append(tableBody);
        tableHead.append(tr);
        this.append(table);

        super.render();
    }
}

customElements.define("el-table-page", TablePageView);