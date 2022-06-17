import {Api} from "./api/Api.js";
import {PageBuilder} from "./pages/PageBuilder.js";
import {DataModel} from "./models/DataModel.js";
import {Menu} from "./widgets/Menu.js";
import {Router} from "./Router.js";
import {Scene} from "./Scene.js";
import {RouterEvent} from "./events/RouterEvent.js";

export class App {
    #router;
    #elScene;
    #currentPage;
    #pageBuilder;

    static get currentLocale() {return "en_US"}; //TODO: move it from here

    constructor() {
        this.#elScene = new Scene();
        document.querySelector("body").append(this.#elScene);

        this.#router = new Router();
        this.#router.addEventListener(RouterEvent.ON_ROUTE_CHANGED, this.#onRouteChanged.bind(this));

        this.#pageBuilder = new PageBuilder();

        this.#requestMenu();
    }


    #requestMenu() {
        Api.get(Api.URL_MENU).then((response) => {
            const menuData = new DataModel(response);
            const menuItemsList = menuData.get("items");
            const menu = new Menu(menuItemsList);
            this.#elScene.append(menu);
            this.#router.start(menuItemsList);
        });
    }


    #onRouteChanged(event) {
        if(this.#currentPage) {
            this.#currentPage.remove();
        }

        this.#currentPage = this.#pageBuilder.createPage(new this.#router.configClass());
        this.#elScene.append(this.#currentPage);
    }
}

new App();