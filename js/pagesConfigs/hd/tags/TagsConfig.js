import {HappifiersConfigBase} from "../HappifiersConfigBase.js";
import {ColDataBuilder} from "../../../utils/ColDataBuilder.js";

export class TagsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    getBaseConfig(...args) {
        return super.getBaseConfig({
            caption: "Tags",
            cols: [
                ColDataBuilder.getCol("Name Translations", "name", ColDataBuilder.COL_TYPE_STRING),
                ColDataBuilder.getCol("Human Url", "humanUrl", ColDataBuilder.COL_TYPE_STRING, false),
                ColDataBuilder.getCol("Type", "type", ColDataBuilder.COL_TYPE_CHIP, false),
                ColDataBuilder.getCol("Parent Id", "parentId", ColDataBuilder.COL_TYPE_STRING, false),
                ColDataBuilder.getCol("Sequence", "sequence", ColDataBuilder.COL_TYPE_STRING, false),
                ColDataBuilder.getCol("Created At", "createdAt", ColDataBuilder.COL_TYPE_DATE, false)/*,
                ColDataBuilder.getCol("Node Id", "nodeId", ColDataBuilder.COL_TYPE_STRING, false),
                ColDataBuilder.getCol("Tag By Parent ID", "tagByParentId", ColDataBuilder.COL_TYPE_OBJECT, false),*/
            ],
        });
    }
}