class SomeBlocks {
    constructor (runtime) {
        /**
         * Store this for later communication with the Scratch VM runtime.
         * If this extension is running in a sandbox then `runtime` is an async proxy object.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    // ...
}
return {
    // ...
    blocks: [
        {
            // ...
            arguments: {
                FOO: {
                    type: ArgumentType.NUMBER,
                    menu: 'fooMenu'
                }
            }
        }
    ],
    menus: {
        fooMenu: {
            items: ['a', 'b', 'c']
        }
    }
}
