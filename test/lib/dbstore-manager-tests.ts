import {expect, assert} from 'chai';
import * as sinon from 'sinon';
import {DBStoreManager, StoreInitialize} from './../../src/lib/dbstore-manager';

describe('DBStoreManager Tests', function() {
    var dBStoreManager;

   beforeEach(function() {
   });

   it('constructor', function() {
       expect(dBStoreManager).to.not.be.null;
   });
});

describe('StoreInitialize Tests', function(){
    var storeInitialize;
    var schema = {
        id: 10
    };

    beforeEach(function() {
        storeInitialize = new StoreInitialize(schema)
    });

    it('constructor', function() {
        expect(storeInitialize).to.not.be.null;
    });
});