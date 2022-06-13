import {Api} from "./api/Api.js";
import {Button} from "./components/Button.js";
import {PageBuilder} from "./pages/PageBuilder.js";
import {DataModel} from "./models/DataModel.js";
import {Menu} from "./widgets/Menu.js";
import {AuthorsConfig} from "./pagesConfigues/hd/authors/AuthorsConfig.js";

export class App {

    #elBody;

    constructor() {
        this.#elBody = document.querySelector("body");
        this.#requestMenu();
        /*const pageBuilder = new PageBuilder();
        Api.get(Api.URL_TAGS).then((response) => {
            const model = new DataModel(response);
            model.setProperty("pageName", "Tags");
            const page = pageBuilder.createPage(model, PageBuilder.TYPE_TABLE, "Tags");
            page?.render();
        });*/
        console.log(">>>", new AuthorsConfig().getConfig());
    }

    #requestMenu() {
        Api.get(Api.URL_MENU).then((response) => {
            const menuData = new DataModel(response);
            const menu = new Menu(menuData.get("items"));
            this.#elBody.append(menu);
        });
    }

}

new App();