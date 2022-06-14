import {Api} from "./api/Api.js";
import {Button} from "./components/Button.js";
import {PageBuilder} from "./pages/PageBuilder.js";
import {DataModel} from "./models/DataModel.js";
import {Menu} from "./widgets/Menu.js";
import {AuthorsConfig} from "./pagesConfigs/hd/authors/AuthorsConfig.js";
import {Router} from "./Router.js";
import {Scene} from "./Scene.js";
import {ElementEvent} from "./events/ElementEvent.js";

export class App {

    #router;
    #elScene;

    constructor() {
        this.#elScene = new Scene();
        document.querySelector("body").append(this.#elScene);

        this.#router = new Router();
        this.#requestMenu();

        /*const pageBuilder = new PageBuilder();
        Api.get(Api.URL_TAGS).then((response) => {
            //const model = new DataModel(response);
            //model.setProperty("pageName", "Tags");
            const page = pageBuilder.createPage(new AuthorsConfig());
            page?.render();
        });*/
        //console.log(">>>", new AuthorsConfig().getConfig());

        Api.gql("/happifiers", new AuthorsConfig().getRequestBody());
    }

    #requestMenu() {
        Api.get(Api.URL_MENU).then((response) => {
            const menuData = new DataModel(response);
            const menuItemsList = menuData.get("items");
            const menu = new Menu(menuItemsList);
            this.#router.setRoutes(menuItemsList);
            this.#elScene.append(menu);
        });
    }

}

new App();