"use strict";

const readJson = require("r-json")
    , writeJson = require("w-json")
    , abs = require("abs")
    , path = require("path")
    , EnginePaths = require("engine-paths")
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
        if (typeof appPath !== "string" || !appPath) {
            throw new TypeError("The app parameter should be a string.");
        }
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
     * createInstance
     * Creates a new instance.
     *
     * @name createInstance
     * @function
     * @param {String} name The instance name.
     * @param {Object} data The instance content.
     * @param {Function} cb The callback function.
     */
    createInstance (name, data, fn) {
        return this.crud.create(name, data, fn);
    }

    /**
     * readInstance
     * Gets the instance content.
     *
     * @name readInstance
     * @function
     * @param {String} name The instance name.
     * @param {Function} fn The callback function.
     */
    readInstance (name, fn) {
        this.crud.read(name, fn);
    }

    /**
     * updateInstance
     * Updates an instance.
     *
     * @name updateInstance
     * @function
     * @param {String} name The instance name.
     * @param {Object} data The instance content.
     * @param {Function} cb The callback function.
     */
    updateInstance (name, data, fn) {
        return this.crud.update(name, data, fn);
    }

    /**
     * removeInstance
     * Removes an instance.
     *
     * @name removeInstance
     * @function
     * @param {String} name The instance name.
     * @param {Function} cb The callback function.
     */
    removeInstance (name, data, fn) {
        return this.crud.remove(name, fn);
    }

    /**
     * listInstances
     * List instances.
     *
     * @name listInstance
     * @function
     * @param {Function} cb The callback function.
     */
    listInstances (fn) {
        return this.crud.list(fn);
    }

    /**
     * getAllInstances
     * Read all instances.
     *
     * @name getAllnstances
     * @function
     * @param {Function} cb The callback function.
     */
    getAllInstances (fn) {
        return this.crud.readAll(fn);
    }

    /**
     * renameInstance
     * Renames the specified instance.
     *
     * @name renameInstance
     * @function
     * @param {String} oldName The old instance name.
     * @param {String} newName The new instance name.
     * @param {Function} fn The callback function.
     */
    renameInstance (oldName, newName, fn) {
        return this.crud.rename(oldName, newName, fn);
    }
}

module.exports = EngineApp;
