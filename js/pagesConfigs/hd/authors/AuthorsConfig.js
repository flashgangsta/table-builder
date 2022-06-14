import {HappifiersConfigBase} from "../HappifiersConfigBase.js";
import {PageBuilder} from "../../../pages/PageBuilder.js";

export class AuthorsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    /*const allAuthors = `
      query allAuthors($offset: Int!, $orderBy: [AuthorsOrderBy!], $first: Int!) {
        allAuthors(offset: $offset, orderBy: $orderBy, first: $first) {
          edges {
            node {
              id
              authorName: authorNameTranslations
              authorInfo: authorInfoTranslations
              authorImage: authorImageTranslations
              nodeId
            }
          }
          totalCount
        }
      }
    `*/

    getBaseConfig() {
        return super.getBaseConfig({
            requestTitle: "allAuthors",
            colTitles: ["ID", "Author Name", "Author Info", "Author Image"],
        });
    }
}