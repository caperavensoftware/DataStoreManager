export interface IDBStoreManagerSchema {
    dbName: string;
    version: number;
}

export class DBStoreManagerSchema implements IDBStoreManagerSchema {
    dbName: string;
    version: number;
}