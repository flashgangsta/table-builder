export class ColBuilder {
    static getCol(displayName, fieldName, translatable=true) {
        const result = {displayName: displayName, fieldName: fieldName};
        if(translatable) {
            result.fieldName += `: ${fieldName}Translations`;
        }
        return result;
    }
}