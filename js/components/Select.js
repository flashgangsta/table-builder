import {ElementBase} from "../base/ElementBase.js";

export class Select extends ElementBase {

    #options = [];
    #select = [];

    constructor(...options) {
        super();

        if(options && options.length) {
            this.#options = options;
            this.#buildSelect();
            this.append(this.#select);
        }
    }

    #buildSelect() {
        this.#select  = document.createElement("select");
        this.#options.forEach((label, index) => {
            console.log(label);
            const option = document.createElement("option");
            option.value = option.textContent = label;
            this.#select.append(option);
        });
    }


    get selectedOption() {
        return this.#select.options[this.selectedIndex];
    }

    get selectedIndex() {
        return this.#select.options.selectedIndex;
    }

    get selectedOptionText() {
        return this.selectedOption.textContent;
    }

    get selectedOptionValue() {
        return this.selectedOption.value;
    }


    set selectedOption(index) {
        this.#select.options[index].selected = true;
    }


}

customElements.define("el-select", Select);