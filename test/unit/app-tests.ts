import {expect} from 'chai';
import * as jsdom from 'jsdom';
import {App} from './../../src/app';

describe('App Tests', function() {
    var app;

    jsdom.env({
        html: `<link href="dataschema.json" rel="import" id="dataschema">`,
        done: function(error, window) {
            if (error) {
                throw new Error(error.toString())
            }
        }});

    beforeEach(function() {
        app = new App();
    });

    it('constructor', function() {
        expect(app).to.not.be.null;
    });

    it('configureRouter', function() {
        let configuredMap = [];
        const router = {};
        const config = {
            title: "",
            map(map) {
                configuredMap = map;
            }
        };

        app.configureRouter(config, router);

        expect(app.router).to.be.equal(router);
        expect(config.title).to.be.equal('Pragma Products', 'expected config title to be "Pragma Products"');
        expect(configuredMap.length).to.be.equal(1, 'expected config map to contain 1 item');

        describe('testing routes', function() {
           it ('Welcome', function() {
               expect(configuredMap[0].title === "Welcome");
               expect(configuredMap[0].nav === "true");
               expect(configuredMap[0].moduleId === "views/welcome/welcome");
               expect(configuredMap[0].name === "welcome");
           });
        });
    });
});