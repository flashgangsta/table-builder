export class ConfigBase {

    constructor() {

    }

    getBaseConfig(...args) {
        return Object.assign({
            base: "base"
        }, ...args);
    }

    getConfig() {
        const result = Object.assign({}, this.getBaseConfig());
        //TODO: //validate of exists required fields (url etc...)
        return  result;
    }


}