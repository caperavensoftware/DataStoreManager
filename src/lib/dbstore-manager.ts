export class StoreInitialize {
    constructor(schema) {
        this.loadFromSchema(schema);
    }

    loadFromSchema(schema) {
    }
}

export class DBTableSchema extends StoreInitialize {
    version: number;
    fields: string[];
    indexes: string[];

    loadFromSchema(schema) {
        this.version = schema.version;

        if (schema.fields) {
            if (!this.fields) {
                this.fields = [];
            }

            for (let field of schema.fields) {
                this.fields.push(field);
            }
        }

        if (schema.indexes) {
            if (!this.indexes) {
                this.indexes = [];
            }

            for (let index of schema.indexes) {
                this.indexes.push(index);
            }
        }
    }
}

export class DBStoreTable extends StoreInitialize {
    name: string;
    tableSchema: DBTableSchema[];

    loadFromSchema(schema) {
        this.name = schema.name;

        if (!this.tableSchema) {
            this.tableSchema = [];
        }

        for (let schemaDetail of schema.schemas) {
            this.tableSchema.push(new DBTableSchema(schemaDetail));
        }
    }
}

export class DBStoreManager extends StoreInitialize {
    dbName: string;
    version: number;
    tables: DBStoreTable[];

    loadFromSchema(schema) {
        this.dbName = schema.dbName;
        this.version = schema.version;

        if (!this.tables) {
            this.tables = [];
        }

        for(let table of schema.tables) {
            this.tables.push(new DBStoreTable(table));
        }
    }
}