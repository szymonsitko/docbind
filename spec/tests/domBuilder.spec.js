var domBuilder = require('../../src/dom/domBuilder');
var { error } = require('../../src/constants/errorMessages');

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('domBuilder :: Test Suite', () => {
    beforeEach(() => {
        let browserMock = {};
    })

    it('Should be a javascript function', () => {
        expect(typeof domBuilder).toBe('function');
    });

    it('Has method called "createDocument"', () => {
        let methodName = "createDocument";
        expect(Array.from(Object.keys(domBuilder.prototype)).includes(methodName)).toBe(true);
    });

    describe('Testing exceptions handling', () => {
        it('Throws a "not provided" or "undefined" exception', () => {
            expect(function() { new domBuilder() }).toThrowError(error.NOT_PROVIDED_OR_INVALID)
        });

        it('Throws an invalid browser object content exception', () => {
            expect(function() { new domBuilder({}) }).toThrowError(error.INVALID_BROWSER_OBJECT)
        });

        it('Throws an invalid browser object content exception', () => {
            expect(function() { new domBuilder({state: 'key', value: 'value'}) }).toThrowError(error.UNDEFINED_GETHTML_FUNCTION)
        });
    });

    describe('Test suite for the domBuilder result', () => {
        let JSDomObject
        
        beforeEach(() => {
            JSDomObject = new domBuilder({state: 'on', value: {}, getHTML: function() { return '<div></div>' }});
        });

        it('Returns a valid JSDom document object', () => {
            expect(JSDomObject.toString()).toEqual('[object Document]');
        });

        it('Has a querySelector method', () => {
            expect(JSDomObject.querySelector !== 'undefined').toBe(true);
        });
    });
});