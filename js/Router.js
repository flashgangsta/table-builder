import {ElementEvent} from "./events/ElementEvent.js";

export class Router {

    #elAppendedHandler;
    #elScene;
    #menuData = [];
    #routes = [];

    constructor() {
        this.#elScene = document.querySelector("el-scene");
        this.#elAppendedHandler = this.#onLinkAppended.bind(this);
        this.#elScene.addEventListener(ElementEvent.ON_ELEMENT_APPENDED, this.#elAppendedHandler);
        window.onpopstate = function(event) {
            alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
        }
    }


    setRoutes(menuData) {
        menuData.forEach((item, index) => {
            console.log(item);
            this.#menuData.push(item.link);
        })
    }


    #onLinkAppended(event) {
        const link = event.target;
        if(link.tagName === "A" && this.#routes.includes(new URL(link).pathname)) {
            const clickHandler = this.#updatePage.bind(this);
            link.addEventListener("click", clickHandler);
            link.addEventListener(ElementEvent.ON_ELEMENT_REMOVED, (event) => {
                link.removeEventListener("click", clickHandler);
            })
        }
    }


    #updatePage(event) {
        const pathname = new URL(event.currentTarget.href).pathname;
        console.log("UpdatePage:", pathname);
        event.preventDefault();
        window.history.pushState(null, '', event.target.href);
    }
}