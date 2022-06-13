import {ElementBase} from "../base/ElementBase.js";
import {Button} from "../components/Button.js";

export class Menu extends ElementBase {
    constructor(menuItemsList) {
        super();

        menuItemsList.forEach((item, index) => {

            console.log(item)
        });
    }
}

customElements.define("el-menu", Menu);