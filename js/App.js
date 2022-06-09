import {Api} from "./api/Api.js";
import {Button} from "./components/Button.js";
import {PageBuilder} from "./pages/PageBuilder.js";
import {DataModel} from "./models/DataModel.js";

export class App {
    constructor() {
        const elBody = document.querySelector("body");
        const pageBuilder = new PageBuilder();

        Api.get(Api.URL_TAGS).then((response) => {
            const model = new DataModel(response);
            model.setProperty("pageName", "Tags");
            const page = pageBuilder.createPage(model, PageBuilder.TYPE_TABLE, "Tags");
            page?.render();
        });
    }
}

new App();