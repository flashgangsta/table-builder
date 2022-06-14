export class StringUtil {
    static toCamelCase(string) {
        return string.toLowerCase().replace(
            /[^a-zA-Z0-9]+(.)/g,
            (match, char) => {
                return char.toUpperCase();
            }
        );
    }
}