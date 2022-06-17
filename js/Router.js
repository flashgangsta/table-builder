import {ElementEvent} from "./events/ElementEvent.js";
import {AuthorsConfig} from "./pagesConfigs/hd/authors/AuthorsConfig.js";
import {RouterEvent} from "./events/RouterEvent.js";
import {ExpertsConfig} from "./pagesConfigs/hd/experts/ExpertsConfig.js";
import {TagsConfig} from "./pagesConfigs/hd/tags/TagsConfig.js";

export class Router extends EventTarget {

    #elAppendedHandler;
    #elScene;
    #routesList;
    #menuData;
    #currentRoute = "/";
    #isStarted = false;

    #routes = {
        "/authors/": AuthorsConfig,
        "/experts/": ExpertsConfig,
        "/tags/": TagsConfig,
    };

    constructor() {
        super();
        this.#routesList = Object.keys(this.#routes);
        this.#elScene = document.querySelector("el-scene");
        this.#elAppendedHandler = this.#onLinkAppended.bind(this);
        this.#elScene.addEventListener(ElementEvent.ON_ELEMENT_APPENDED, this.#elAppendedHandler);
    }


    start(menuData) {
        if(this.#isStarted) return;
        this.#menuData = menuData;

        const currentPathname = location.pathname;
        if(currentPathname !== this.#currentRoute) {
            this.navigate(currentPathname);
        }
        this.#isStarted = true;
    }


    #onLinkAppended(event) {
        const link = event.target;
        if(link.tagName === "A" && this.#routesList.includes(new URL(link).pathname)) {
            const onLinkClickHandler = this.#onLinkClickHandler.bind(this);
            link.addEventListener("click", onLinkClickHandler);
            link.addEventListener(ElementEvent.ON_ELEMENT_REMOVED, (event) => {
                link.removeEventListener("click", onLinkClickHandler);
            })
        }
    }


    #onLinkClickHandler(event) {
        console.log("#onLinkClickHandler");
        const pathname = new URL(event.currentTarget.href).pathname;
        event.preventDefault();
        this.navigate(pathname);
    }

    get currentRoute() {
        return this.#currentRoute;
    }

    get configClass() {
        return this.#routes[this.#currentRoute];
    }

    navigate(pathname) {
        this.#currentRoute = pathname;
        history.pushState(null, '', location.origin + pathname);
        this.dispatchEvent(new RouterEvent(RouterEvent.ON_ROUTE_CHANGED));
    }
}