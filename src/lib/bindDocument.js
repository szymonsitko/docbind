var { error } = require('../constants/errorMessages');

function BindDocument(cn) {
    return function(browserObject) {
        var prototype = cn.prototype["constructor"]["name"];
        if (prototype.toString() === 'DOMBuilder') {
            return new cn(browserObject);
        }
        throw new ReferenceError(error.MISSING_CONSTRUCTOR);
    }
}

module.exports = BindDocument;