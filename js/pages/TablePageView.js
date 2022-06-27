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
        const tableWrapper = document.createElement("div");
        const footerWrapper = document.createElement("div");
        const countSelect = new TableRecordsCountSelect();
        const tab = new Table(this.pageConfig);
        tableWrapper.append(tab);

        tableWrapper.classList.add("wrapper");
        footerWrapper.classList.add("wrapper", "footer-wrapper");
        countSelect.addEventListener("change", this.#onRowsCountChanged.bind(this));
        footerWrapper.append(countSelect);

        this.append(tableWrapper);
        this.append(footerWrapper);

        Api.gql(config.url, this.pageConfig.getRequestBody()).then((response) => {

            this.dataModel.set(response.data[config.requestTitle]);
            const edges = this.dataModel.get("edges");

            tab.querySelectorAll("el-table-body el-table-row").forEach((row, index) => {
                const edge = edges[index].node;
                row.classList.remove("loading");
                row.querySelectorAll("el-table-cell").forEach((cell) => {
                    const colFieldName = cell.getAttribute("data-field");
                    const value = edge[colFieldName];

                    if(value) {
                        const colType = this.pageConfig.getColTypeByFieldName(colFieldName);

                        switch (colType) {
                            case ColDataBuilder.COL_TYPE_STRING:
                                cell.textContent = this.pageConfig.getColIsTranslatableByFieldName(colFieldName) ? value[App.currentLocale] : value;
                                break;
                            case ColDataBuilder.COL_TYPE_INT:
                                cell.textContent = value.toString();
                                break;
                            case ColDataBuilder.COL_TYPE_IMAGE:
                                const img = new Image();
                                img.src = value[App.currentLocale]
                                cell.append(img);
                                break;
                            case ColDataBuilder.COL_TYPE_LINK:
                                const link = document.createElement("a");
                                link.href = link.textContent = value;
                                cell.append(link);
                                break;
                            case ColDataBuilder.COL_TYPE_DATE:
                                cell.textContent = new Date(value).toLocaleString(App.currentLocale.replaceAll("_", "-"));
                                break;
                            case ColDataBuilder.COL_TYPE_CHIP: {
                                cell.append(new Chip(value));
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
    }
}

customElements.define("el-table-page", TablePageView);