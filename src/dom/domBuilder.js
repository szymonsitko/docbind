var jsdom = require('jsdom');
var { error } = require('../constants/errorMessages');

const { JSDOM } = jsdom;

function DOMBuilder(browserObject) {
    this.document = this.createDocument(browserObject);
    return this.document;
}

DOMBuilder.prototype.createDocument = function(browser) {
    if (!browser || !(browser instanceof Object)) {
        throw new TypeError(error.NOT_PROVIDED_OR_INVALID);
    } else {
        let browserKeys = Object.keys(browser);
        if (!browserKeys.length) {
            throw new TypeError(error.INVALID_BROWSER_OBJECT);
        }
        if (!browser.getHTML) {
            throw new Error(error.UNDEFINED_GETHTML_FUNCTION);
        }
    }
    return new JSDOM('<!DOCTYPE html>' + browser.getHTML('html')).window.document;
}

module.exports = DOMBuilder;