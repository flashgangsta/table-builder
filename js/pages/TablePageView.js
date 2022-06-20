import {PageBase} from "../base/PageBase.js";
import {Api} from "../api/Api.js";
import {ColDataBuilder} from "../utils/ColDataBuilder.js";
import {App} from "../App.js";
import {Chip} from "../components/Chip.js";
import {TableRecordsCountSelect} from "../widgets/table/TableRecordsCountSelect.js";
import {Table} from "../widgets/table/Table.js";

export class TablePageView extends PageBase {

    constructor(pageConfig) {
        super(pageConfig);
        this.render();
    }

    render() {
        const config = this.pageConfig.getConfig();
        const colTitles = ["Actions", ...config.cols.map(col => col.displayName)];
        const colFields = ["", ...config.cols.map(col => col.fieldName)];

        const tableWrapper = document.createElement("div");
        const footerWrapper = document.createElement("div");
        const table = document.createElement("table");
        const caption = document.createElement("caption");
        const captionTitle = document.createElement("h3");
        const tableHead = document.createElement("thead");
        const tr = document.createElement("tr");
        const tableBody = document.createElement("tbody");
        const countSelect = new TableRecordsCountSelect();

        const tab = new Table(this.pageConfig);
        tableWrapper.append(tab);

        tableWrapper.classList.add("wrapper");
        footerWrapper.classList.add("wrapper", "footer-wrapper");
        countSelect.addEventListener("change", this.#onRowsCountChanged.bind(this));
        footerWrapper.append(countSelect);

        captionTitle.classList.add("caption-title");
        captionTitle.textContent = config.caption;
        caption.append(captionTitle);


        colTitles.map((el, index) => {
            const th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.textContent = el;
           tr.append(th);
        });

        table.append(caption);
        table.append(tableHead);
        table.append(tableBody);

        for(let i=0, len = config.recordsCount; i < len; i++) {
            const tr = document.createElement("tr");
            tr.classList.add("loading");
            for(let j=0; j < colTitles.length; j++) {
                const td = document.createElement("td");
                td.setAttribute("data-field", colFields[j]);
                tr.append(td);
            }
            tableBody.append(tr);
        }

        tableHead.append(tr);
        this.append(tableWrapper);
        tableWrapper.append(table);
        this.append(footerWrapper);

        Api.gql(config.url, this.pageConfig.getRequestBody()).then((response) => {

            this.dataModel.set(response.data[config.requestTitle]);
            const edges = this.dataModel.get("edges");

            tableBody.querySelectorAll("tr").forEach((row, index) => {
                const edge = edges[index].node;
                row.classList.remove("loading");
                row.querySelectorAll("td").forEach((col) => {
                    const colFieldName = col.getAttribute("data-field");
                    const value = edge[colFieldName];

                    if(value) {
                        const colType = this.pageConfig.getColTypeByFieldName(colFieldName);

                        switch (colType) {
                            case ColDataBuilder.COL_TYPE_STRING:
                                col.textContent = this.pageConfig.getColIsTranslatableByFieldName(colFieldName) ? value[App.currentLocale] : value;
                                break;
                            case ColDataBuilder.COL_TYPE_INT:
                                col.textContent = value.toString();
                                break;
                            case ColDataBuilder.COL_TYPE_IMAGE:
                                const img = new Image();
                                img.src = value[App.currentLocale]
                                col.append(img);
                                break;
                            case ColDataBuilder.COL_TYPE_LINK:
                                const link = document.createElement("a");
                                link.href = link.textContent = value;
                                col.append(link);
                                break;
                            case ColDataBuilder.COL_TYPE_DATE:
                                col.textContent = new Date(value).toLocaleString(App.currentLocale.replaceAll("_", "-"));
                                break;
                            case ColDataBuilder.COL_TYPE_CHIP: {
                                col.append(new Chip(value));
                                break;
                            }
                        }
                    }
                });
            });
        });

        super.render();
    }


    #onRowsCountChanged(event) {
        event.stopPropagation();
        console.log("onRowsCountChanged()");
        console.log(event.target);
    }
}

customElements.define("el-table-page", TablePageView);