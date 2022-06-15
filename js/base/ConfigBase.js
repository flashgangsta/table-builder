export class ConfigBase {

    static get VIEW_TYPE_TABLE() {return "viewTypeTable"};
    static get VIEW_TYPE_FORM() {return "viewTypeForm"};

    constructor() {

    }

    getBaseConfig(...args) {
        return Object.assign({
            viewType: ConfigBase.VIEW_TYPE_TABLE,
        }, ...args);
    }

    getConfig() {
        const result = Object.assign({}, this.getBaseConfig());
        //TODO: validate of exists required fields (url etc...)
        return result;
    }

    getRequestBody() {
        const config = this.getConfig();
        return config.viewType = ConfigBase.VIEW_TYPE_TABLE ? this.#getTableRequestBody() : this.#getFormRequestBody();
    }


    #getTableRequestBody() {
        const config = this.getConfig();

        return {
            operationName: config.requestTitle,
            query: `query ${config.requestTitle}($offset: Int!, $orderBy: [AuthorsOrderBy!], $first: Int!) {
                ${config.requestTitle}(offset: $offset, orderBy: $orderBy, first: $first) {
                    edges {
                        node {
                            ${config.cols.map((col) => {
                                return col.fieldName;
                            }).join("\n                             ")}
                        }
                    }
                }
            }`,
            variables: {
                offset: 0,
                orderBy: ["ID_DESC"],
                first: 5 //rows count
            }
        }
    }


    #getFormRequestBody() {
        const config = this.getConfig();
    }
}