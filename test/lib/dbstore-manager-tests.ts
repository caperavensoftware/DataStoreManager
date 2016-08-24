import {expect, assert} from 'chai';
import * as sinon from 'sinon';
import {DBTableSchema, DBStoreTable, DBStoreManager, StoreInitialize} from './../../src/lib/dbstore-manager';

describe('DBTableSchema Tests', function() {
    let dbTableSchema = null;

    beforeEach(function() {
        dbTableSchema = new dbTableSchema()
    });

    it('constructor', function() {
        expect(dbTableSchema).to.not.be.null;
    });
});

describe('DBStoreTable Tests', function() {
    let dbStoreTable = null;

    beforeEach(function() {

    });

    it('constructor', function() {
        expect(dbStoreTable).to.not.be.null;
    });
});


describe('DBStoreManager Tests', function() {
    let dBStoreManager = null;

   beforeEach(function() {
   });

   it('constructor', function() {
       expect(dBStoreManager).to.not.be.null;
   });
});

describe('StoreInitialize Tests', function(){
    let storeInitialize = null;
    let schema = {
        id: 10
    };

    beforeEach(function() {
        storeInitialize = new StoreInitialize(schema)
    });

    it('constructor', function() {
        expect(storeInitialize).to.not.be.null;
    });
});