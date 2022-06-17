import {ColDataBuilder} from "../utils/ColDataBuilder.js";

export class ConfigBase {

    static get VIEW_TYPE_TABLE() {return "viewTypeTable"};
    static get VIEW_TYPE_FORM() {return "viewTypeForm"};

    #colsByFieldName = {};

    constructor() {

    }

    getBaseConfig(...args) {
        const result = Object.assign({
            viewType: ConfigBase.VIEW_TYPE_TABLE,
            recordsCount: 5,
            offset: 0,
            orderBy: ["ID_DESC"]
        }, ...args);

        result.cols = [
            ColDataBuilder.getCol("ID", "id", ColDataBuilder.COL_TYPE_INT, false),
            ...result.cols
        ];

        result.requestTitle = `all${result.caption}`;

        result.cols.forEach((col) => {
            this.#colsByFieldName[col.fieldName] = col;
        });

        return result;
    }

    getConfig() {
        const result = Object.assign({}, this.getBaseConfig());
        //TODO: validate of exists required fields (url etc...)
        return result;
    }


    getColIsTranslatableByFieldName(fieldName) {
        return this.#colsByFieldName[fieldName]?.translatable || null;
    }


    getColTypeByFieldName(fieldName) {
        return this.#colsByFieldName[fieldName]?.type || null;
    }


    getRequestBody() {
        const config = this.getConfig();
        return config.viewType = ConfigBase.VIEW_TYPE_TABLE ? this.#getTableRequestBody() : this.#getFormRequestBody();
    }

    #getTableRequestBody() {
        const config = this.getConfig();

        return {
            operationName: config.requestTitle,
            query: `query ${config.requestTitle}($offset: Int!, $orderBy: [${config.caption}OrderBy!], $first: Int!) {
                ${config.requestTitle}(offset: $offset, orderBy: $orderBy, first: $first) {
                    edges {
                        node {
                            ${config.cols.map((col) => {
                                return col.fieldNameForRequest;
                            }).join("\n                             ")}
                        }
                    }
                }
            }`,
            variables: {
                offset: config.offset,
                orderBy: config.orderBy,
                first: config.recordsCount //rows count
            }
        }
    }


    #getFormRequestBody() {
        const config = this.getConfig();
    }
}