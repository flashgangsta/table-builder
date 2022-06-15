import {HappifiersConfigBase} from "../HappifiersConfigBase.js";
import {PageBuilder} from "../../../pages/PageBuilder.js";
import {ColBuilder} from "../../../utils/ColBuilder.js";

export class AuthorsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    getBaseConfig() {
        return super.getBaseConfig({
            caption: "Authors",
            requestTitle: "allAuthors",
            cols: [
                ColBuilder.getCol("ID", "id", false),
                ColBuilder.getCol("Author Name", "authorName"),
                ColBuilder.getCol("Author Info", "authorInfo"),
                ColBuilder.getCol("Author Image", "authorImage")
            ],
        });
    }
}