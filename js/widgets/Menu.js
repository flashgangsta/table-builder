import {ElementBase} from "../base/ElementBase.js";
import {DataModel} from "../models/DataModel.js";
import {Link} from "../components/Link.js";
import {ElementEvent} from "../events/ElementEvent.js";


export class Menu extends ElementBase {
    #menuItemsList;

    constructor(menuItemsList) {
        super();
        this.#menuItemsList = menuItemsList;
        this.addEventListener(ElementEvent.ON_ELEMENT_APPENDED, this.#onMenuAppended);
    }

    #onMenuAppended(event) {
        this.removeEventListener(ElementEvent.ON_ELEMENT_APPENDED, this.#onMenuAppended);

        this.#menuItemsList.forEach((item, index) => {
            if(item.link) {
                const link = new Link(item.name, item.link);
                this.append(link);
            } else if(item.children) {
                const dataModel = new DataModel(item.children);
            }
        });
    }
}

customElements.define("el-menu", Menu);