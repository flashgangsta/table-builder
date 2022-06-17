export class ColDataBuilder {

    static get COL_TYPE_IMAGE() { return "Image"};
    static get COL_TYPE_STRING() { return "String"};
    static get COL_TYPE_INT() { return "Int"};
    static get COL_TYPE_LINK() { return "Link"};
    static get COL_TYPE_CHIP() { return "Chip"};
    static get COL_TYPE_DATE() { return "Date"};

    static getCol(displayName, fieldName, type= ColDataBuilder.COL_TYPE_STRING, translatable=true) {
        const result = {
            displayName: displayName,
            fieldName: fieldName,
            fieldNameForRequest: fieldName,
            type: type,
            translatable: translatable
        };

        if(translatable) {
            result.fieldNameForRequest = `${fieldName}: ${fieldName}Translations`;
        }

        return result;
    }
}