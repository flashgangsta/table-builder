import {PageBase} from "../base/PageBase.js";

export class TablePageView extends PageBase {
    constructor(...attributes) {
        super(...attributes);
    }

    render() {
        const table = document.createElement("table");
        const caption = document.createElement("caption");
        const tableHead = document.createElement("thead");
        const tr = document.createElement("tr");
        const tableBody = document.createElement("tbody");

        caption.textContent = this.model.get("pageName");

        //TODO: think about move table cols to backend for easy generate it on frontent
        
        ["Actions", "ID", "NameTranslations", "Human URL", "Type", "Parent ID", "Sequence", "Created At"].map((el, index) => {
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