export class DataModel extends EventTarget {

    #data = null;

    constructor(data=null) {
        super();

        if(data) {
            this.set(data);
        }
    }

    set(data) {
        if(data.hasOwnProperty("data")) {
            data = data.data;
        }
        this.#data = data;
    }

    get(field) {
        return this.#data[field];
    }

    clear() {
        this.#data = null;
    }

    setProperty(propertyName, value) {
        const hasOwnProperty = this.#data.hasOwnProperty(propertyName);
        this.#data[propertyName] = value;

        if(hasOwnProperty) {
            this.dispatchEvent(new Event(`change:${propertyName}`));
        }

        this.#dispatchChange();
    }

    #dispatchChange() {
        this.dispatchEvent(new Event("change"));
    }
}