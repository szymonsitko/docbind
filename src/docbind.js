require('module-alias/register');

var DOMBuilder = require('./dom/domBuilder');
var BindDocument = require('./lib/bindDocument');

module.exports = {
    document: BindDocument(DOMBuilder)
}