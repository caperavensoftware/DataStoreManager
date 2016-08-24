import {DBStoreManager} from "./lib/dbstore-manager";

export class App {
    router: any = null;
    dbStoreManager: DBStoreManager = null;

    configureRouter(config, router) {
        config.title = 'Pragma Products';
        config.map([
            {route: ['', 'welcome'], name: 'welcome',      moduleId: 'views/welcome/welcome',      nav: true, title: 'Welcome'},
        ]);

        this.router = router;

        this.loadSchema();
    }

    loadSchema() {
        const link = document.querySelector("#dataschema");
        const json = (<any>link).import.querySelector("body").innerHTML;
        const schema = JSON.parse(json);
        this.dbStoreManager = new DBStoreManager(schema);
    }
}