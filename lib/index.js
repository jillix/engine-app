"use strict";

const readJson = require("r-json")
    , writeJson = require("w-json")
    , abs = require("abs")
    , path = require("path")
    , enginePaths = require("engine-paths")
    , CompositionCrud = require("engine-composition-crud")
    ;

class EngineApp {
    /**
     * EngineApp
     * Creates a new instance of `EngineApp`.
     *
     * @name EngineApp
     * @function
     * @param {String} appPath The app path.
     */
    constructor (appPath, compositionCrud) {
        this.paths = new EnginePaths(appPath);
        this.crud = compositionCrud || new CompositionCrud(this.paths);
    }

    /**
     * getPackage
     * Gets the package.json content.
     *
     * @name getPackage
     * @function
     * @param {Function} fn The callback function.
     * @return {Object} The `package.json` content as json (if called without a callback function).
     */
    getPackage (fn) {
        return readJson(this.paths.package, fn);
    }

    /**
     * setPackage
     * Sets the package.json content.
     *
     * @name setPackage
     * @function
     * @param {Object} data The data to set in the file.
     * @param {Function} fn The callback function.
     */
    setPackage (data, fn) {
        return writeJson(this.paths.package, data, fn);
    }

    /**
     * readInstance
     * Gets the instance content.
     *
     * @name readInstance
     * @function
     * @param {String} name The instance name.
     * @param {Function} fn The callback function.
     * @return {Object} The instance content as json (if called without a callback function).
     */
    readInstance (name, fn) {
        return readJson(this.paths.instance(name), fn);
    }
}
