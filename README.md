# docbind
Version: 0.0.1

## About the package

dobind is a simple npm micromodule, which brings the native DOM javascript methods
into functional test with WebdriverIO.

## How to use it?

It's really simple:

        // Importing like that
        const document = require('docbind');

        ...
        // Using inside of "it" block
        let flexSection = document(browser).querySelector('.flex-section');

        expect(flexSection.children.length).toEqual(3);

Where 'browser' is a WebdriverIO method, available as a global variable in all test specs.

## That's really it?

No! Just remember, any time you call document(browser), you are capturing the
current HTML document state, after changes, transformations, etc.

## Credits

Made by Szymon Sitko @2018.