import {HappifiersConfigBase} from "../HappifiersConfigBase.js";
import {ColBuilder} from "../../../utils/ColBuilder.js";

export class ExpertsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    getBaseConfig() {
        return super.getBaseConfig({
            requestTitle: "allExperts",
            cols: [
                ColBuilder.getCol("ID", "id", false),
                ColBuilder.getCol("Author Name", "authorName"),
                ColBuilder.getCol("Author Info", "authorInfo"),
                ColBuilder.getCol("Author Image", "authorImage")
            ],
        });
    }
}