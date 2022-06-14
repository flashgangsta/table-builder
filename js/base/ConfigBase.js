import {PageBuilder} from "../pages/PageBuilder.js";
import {StringUtil} from "../utils/StringUtil.js";

export class ConfigBase {

    constructor() {

    }

    getBaseConfig(...args) {
        return Object.assign({
            viewType: PageBuilder.TYPE_TABLE,
        }, ...args);
    }

    getConfig() {
        const result = Object.assign({}, this.getBaseConfig());
        //TODO: validate of exists required fields (url etc...)
        return result;
    }

    getRequestBody() {
        const config = this.getConfig();
        return config.viewType = PageBuilder.TYPE_TABLE ? this.#getTableRequestBody() : this.#getFormRequestBody();
    }


    #getTableRequestBody() {
        const config = this.getConfig();

        return {
            operationName: config.requestTitle,
            query: `query MyQuery($offset: Int!, $orderBy: [AuthorsOrderBy!], $first: Int!) {
                ${config.requestTitle}(offset: $offset, orderBy: $orderBy, first: $first) {
                    edges {
                        node {
                            ${config.colTitles.map((colTitle) => {
                const camelCased = StringUtil.toCamelCase(colTitle);
                return camelCased + (colTitle === "ID" ? "" : `:${camelCased}Translations`);
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