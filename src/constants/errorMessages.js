const NOT_PROVIDED_OR_INVALID = "Browser element is not provided or its type is invalid. Please make sure that the instance of WebdriverIO is configured.";
const INVALID_BROWSER_OBJECT = "Browser object exists, but appears to be invalid. Please double check your WebdriverIO configuration.";
const UNDEFINED_GETHTML_FUNCTION = "Valid browser object should contain native 'getHTML' method, got undefined instead.";
const MISSING_CONSTRUCTOR = "BindDocument function was invoked with wrong parameter: DOMBuilder is not present.";

module.exports = {
    error: {
        'NOT_PROVIDED_OR_INVALID': NOT_PROVIDED_OR_INVALID,
        'INVALID_BROWSER_OBJECT': INVALID_BROWSER_OBJECT,
        'UNDEFINED_GETHTML_FUNCTION': UNDEFINED_GETHTML_FUNCTION,
        'MISSING_CONSTRUCTOR': MISSING_CONSTRUCTOR
    }
}