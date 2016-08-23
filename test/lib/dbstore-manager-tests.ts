import {expect} from 'chai';
import {DBStoreManager} from './../../src/lib/dbstore-manager';
import {DBStoreManagerSchema} from './../../src/lib/IDBStoreManagerSchema';

describe('DBStoreManager Tests', function() {
    var dBStoreManager;
    var schema: DBStoreManagerSchema;

   beforeEach(function() {
       schema = new DBStoreManagerSchema();
       schema.dbName = "OK512SP1";
       schema.version = 1;

       dBStoreManager = new DBStoreManager(schema);

       expect(dBStoreManager.dbName).to.equal(schema.dbName);
       expect(dBStoreManager.version).to.equal(schema.version);
   });

   it('constructor', function() {
       expect(dBStoreManager).to.not.be.null;
   });
});