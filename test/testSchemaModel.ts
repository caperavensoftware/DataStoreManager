export const testSchemaModel = {
    "dbName": "ConnectionName",
    "version": 3,

    "tables": [
    {
        "name": "table1",
        "schemas": [
            {
                "version": 1,
                "fields": [
                    "id",
                    "code",
                    "description"
                ],
                "indexes": [
                    "id",
                    "code"
                ]
            },
            {
                "version": 2,
                "fields": [
                    "field1"
                ]
            },
            {
                "version": 3,
                "fields": [
                    "field2"
                ],
                "indexes": ["field2"]
            }
        ]
    },
    {
        "name": "table2",
        "schemas": [
            {
                "version": 3,
                "fields": [
                    "id", "code"
                ],
                "indexes": [
                    "id"
                ]
            }
        ]
    }]
};