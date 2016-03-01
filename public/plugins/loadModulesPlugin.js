var loadModulesPlugin = (function() {

    function loadModules(resolver, compDef, wire) {
        var fromIds = compDef.options.fromIds;
        wire.loadModule(fromIds[0]).then(res => {
            console.log("RESULT:::", res);
            resolver.resolve();
        })
    }

    return function loadModulesPlugin(options) {
        return {
            factories: {
                loadModules: loadModules
            }
        }
    }
})();