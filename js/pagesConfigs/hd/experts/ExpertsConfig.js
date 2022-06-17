import {HappifiersConfigBase} from "../HappifiersConfigBase.js";
import {ColDataBuilder} from "../../../utils/ColDataBuilder.js";

export class ExpertsConfig extends HappifiersConfigBase {
    constructor() {
        super();
    }

    getBaseConfig() {
        return super.getBaseConfig({
            caption: "Experts",
            cols: [
                ColDataBuilder.getCol("Expert Name", "expertName", ColDataBuilder.COL_TYPE_STRING),
                ColDataBuilder.getCol("Expert Info", "expertInfo", ColDataBuilder.COL_TYPE_STRING),
                ColDataBuilder.getCol("Expert Image", "expertImage", ColDataBuilder.COL_TYPE_IMAGE),
                ColDataBuilder.getCol("Expert Link", "expertLink", ColDataBuilder.COL_TYPE_LINK, false)
            ],
            orderBy: ["ID_ASC"]
        });
    }
}