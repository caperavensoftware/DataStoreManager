

export class DBStoreManager {
    dbName: string;
    version: number;

    constructor(schema) {
        this.dbName = schema.dbName;
        this.version = schema.version;
    }

    private connect() {

    }
}