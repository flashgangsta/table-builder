import {HappifiersConfigBase} from "../HappifiersConfigBase.js";
import {ColDataBuilder} from "../../../utils/ColDataBuilder.js";

export class AuthorsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    getBaseConfig() {
        return super.getBaseConfig({
            caption: "Authors",
            cols: [
                ColDataBuilder.getCol("Author Name", "authorName", ColDataBuilder.COL_TYPE_STRING),
                ColDataBuilder.getCol("Author Info", "authorInfo", ColDataBuilder.COL_TYPE_STRING),
                ColDataBuilder.getCol("Author Image", "authorImage", ColDataBuilder.COL_TYPE_IMAGE)
            ],
        });
    }
}