var { error } = require('../../src/constants/errorMessages');
var BindDocument = require('../../src/lib/bindDocument');

describe('BindDocument :: Test Suite', () => {
    it('Fails when wrong constructor is passed', () => {
        expect(BindDocument.prototype["constructor"]["name"].toString()).toEqual('BindDocument');
    });

    it('Will complain if the wrong constructor is provided', () => {
        expect(BindDocument(Object)).toThrowError(error.MISSING_CONSTRUCTOR);
    });
});