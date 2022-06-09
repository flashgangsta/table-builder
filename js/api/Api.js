export class Api {

    static get URL_TAGS() { return "/api/tags/" };
    static get URL_AUTHORS() { return "/api/authors/" };

    constructor() {

    }

    static async get(url, params=null) {
        await this.#requestDelayEmulation();
        let result;
        switch (url) {
            case Api.URL_TAGS : {
                result = {"data":{"allTags":{"edges":[{"cursor":"WyJpZF9hc2MiLFsyXV0=","node":{"id":2,"nameTranslations":{"en_US":"Pregnancy"},"humanUrl":"pregnancy","type":"community","parentId":null,"sequence":4,"createdAt":"2022-03-09T07:46:52.83028","nodeId":"WyJ0YWdzIiwyXQ==","tagByParentId":null,"__typename":"Tag"},"__typename":"TagsEdge"},{"cursor":"WyJpZF9hc2MiLFszXV0=","node":{"id":3,"nameTranslations":{"en_US":"Pregnancy Health"},"humanUrl":"pregnancy-health","type":"community","parentId":2,"sequence":0,"createdAt":"2022-03-09T07:47:17.533831","nodeId":"WyJ0YWdzIiwzXQ==","tagByParentId":{"id":2,"nameTranslations":{"en_US":"Pregnancy"},"tagByParentId":null,"__typename":"Tag"},"__typename":"Tag"},"__typename":"TagsEdge"},{"cursor":"WyJpZF9hc2MiLFs0XV0=","node":{"id":4,"nameTranslations":{"de_DE":"Anzeichen und Symptome einer Schwangerschaft","en_US":"Pregnancy Signs & Symptoms"},"humanUrl":"pregnancy-signs-symptoms","type":"community","parentId":3,"sequence":null,"createdAt":"2022-03-09T07:47:39.548906","nodeId":"WyJ0YWdzIiw0XQ==","tagByParentId":{"id":3,"nameTranslations":{"en_US":"Pregnancy Health"},"tagByParentId":{"id":2,"nameTranslations":{"en_US":"Pregnancy"},"tagByParentId":null,"__typename":"Tag"},"__typename":"Tag"},"__typename":"Tag"},"__typename":"TagsEdge"},{"cursor":"WyJpZF9hc2MiLFs1XV0=","node":{"id":5,"nameTranslations":{"en_US":"Healthy Lifestyle During Pregnancy"},"humanUrl":"healthy-lifestyle-during-pregnancy","type":"community","parentId":8838,"sequence":null,"createdAt":"2022-03-09T07:47:56.150675","nodeId":"WyJ0YWdzIiw1XQ==","tagByParentId":{"id":8838,"nameTranslations":{"en_US":"MS Diagnosis"},"tagByParentId":{"id":8815,"nameTranslations":{"en_US":"MS Symptoms & Diagnosis"},"tagByParentId":{"id":8814,"nameTranslations":{"en_US":"MS"},"__typename":"Tag"},"__typename":"Tag"},"__typename":"Tag"},"__typename":"Tag"},"__typename":"TagsEdge"},{"cursor":"WyJpZF9hc2MiLFs2XV0=","node":{"id":6,"nameTranslations":{"en_US":"Mental Health & Pregnancy"},"humanUrl":"mental-health-pregnancy","type":"community","parentId":2,"sequence":null,"createdAt":"2022-03-09T07:48:14.256925","nodeId":"WyJ0YWdzIiw2XQ==","tagByParentId":{"id":2,"nameTranslations":{"en_US":"Pregnancy"},"tagByParentId":null,"__typename":"Tag"},"__typename":"Tag"},"__typename":"TagsEdge"}],"totalCount":140,"__typename":"TagsConnection"}}};
                break;
            }
            case Api.URL_AUTHORS: {
                result = {"data":{"allAuthors":{"edges":[{"node":{"id":348,"authorName":{"de_DE":"Juni SILY.","en_US":"June Silny 2","es_ES":"Sillón de junio","es_US":"June Silny","fr_CA":"Juin Silny","fr_FR":"June Silny","it_IT":"June Silny","ja_JP":"June Silny","pt_BR":"June Silny","zh_CN":"六月矽球"},"authorInfo":{"de_DE":"nein nein nein nein nein nein","en_US":"June Silny","es_ES":"Sillón de junio","es_US":"June Silny","fr_CA":"Juin Silny","fr_FR":"June Silny","it_IT":"June Silny","ja_JP":"June Silny","pt_BR":"June Silny","zh_CN":"六月矽球"},"authorImage":{"en_US":"https://hpf-happify-b2c-eu-qa-02-user-uploads.happify.com/cms_uploads/en_US/img/authors/wf2-93fbdca.jpg"},"nodeId":"WyJhdXRob3JzIiwzNDhd","__typename":"Author"},"__typename":"AuthorsEdge"},{"node":{"id":346,"authorName":{"de_DE":"ilonas","en_US":"ilonas"},"authorInfo":{"de_DE":"Diese Ergebnisse stammen direkt von Menschen, die die gleichen Probleme haben wie Sie.Führen Sie jede Woche ein paar Aktivitäten durch, um eine sinnvolle Verbesserung Ihrer Lebenszufriedenheit und Ihrer Fähigkeit, sich gegen Negativität zu wehren, zu sehen.Millionen von Happify-Mitgliedern haben diesen Wandel erlebt.Das kannst du auch.","en_US":"These results come directly from people who are experiencing the same issues as you. Complete a few activities each week to start seeing meaningful improvement in your life satisfaction and your ability to fight back against negativity. Millions of Happify members have experienced this shift. So can you.","fr_CA":"These results come directly from people who are experiencing the same issues as you. Complete a few activities each week to start seeing meaningful improvement in your life satisfaction and your ability to fight back against negativity. Millions of Happify members have experienced this shift. So can you.","it_IT":"."},"authorImage":{"en_US":"https://hpf-happify-b2c-eu-qa-02-user-uploads.happify.com/cms_uploads/en_US/img/authors/kitten-a6b749b.jpg"},"nodeId":"WyJhdXRob3JzIiwzNDZd","__typename":"Author"},"__typename":"AuthorsEdge"},{"node":{"id":345,"authorName":{"en_US":"By Author test Record From SQL 1"},"authorInfo":{},"authorImage":null,"nodeId":"WyJhdXRob3JzIiwzNDVd","__typename":"Author"},"__typename":"AuthorsEdge"},{"node":{"id":344,"authorName":{"en_US":"Carol Chimchima"},"authorInfo":{},"authorImage":{"en_US":"https://hpf-happify-b2c-eu-qa-02-user-uploads.happify.com/cms_uploads/en_US/img/authors/wf1-56f69ab.jpg"},"nodeId":"WyJhdXRob3JzIiwzNDRd","__typename":"Author"},"__typename":"AuthorsEdge"},{"node":{"id":343,"authorName":{"en_US":"Asap Sapovic"},"authorInfo":{"en_US":"Creator"},"authorImage":{"en_US":"https://hpf-happify-b2c-eu-qa-02-user-uploads.happify.com/cms_uploads/en_US/img/authors/puppy-512d5a2.jpg"},"nodeId":"WyJhdXRob3JzIiwzNDNd","__typename":"Author"},"__typename":"AuthorsEdge"}],"totalCount":110,"__typename":"AuthorsConnection"}}}
                break;
            }
        }
        console.log(`========== Api request ==========`);
        console.log("response:", result);
        console.log(`=================================`);
        return result;
    }

    static async #requestDelayEmulation() {
        const timeout = 40 + (Math.random() * 160);
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
}