import {Api} from "./api/Api.js";

export class App {
    constructor() {
        const elBody = document.querySelector("body");
        const button = document.createElement("button");
        elBody.textContent = "Welcome to the Quake III Arena!";
        button.textContent = "test";

        button.addEventListener("click", (event) => {
            Api.get(Api.URL_TAGS).then((response) => {
                console.log(response);
            });
        });
        elBody.append(button);
    }
}

new App();