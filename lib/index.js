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
     * @param {String|CompositionAdapter} adapter The path to the application or the adapter object.
     */
    constructor (adapter) {
        if (!adapter) { return; }

        if (typeof adapter === "string") {
            adapter = new CompositionCrud(new EnginePaths(adapter));
        }

        this.crud = adapter;
        this.paths = this.crud.paths;
    }

    /**
     * getPackage
     * Gets the package.json content.
     *
     * @name getPackage
     * @function
     * @param {Function} cb The callback function.
     * @return {Object} The `package.json` content as json (if called without a callback function).
     */
    getPackage (cb) {
        // TODO Use the adapter here (readFile)
        return readJson(this.paths.package, cb);
    }

    /**
     * setPackage
     * Sets the package.json content.
     *
     * @name setPackage
     * @function
     * @param {Object} data The data to set in the file.
     * @param {Function} cb The callback function.
     */
    setPackage (data, cb) {
        // TODO Use the adapter here (writeFile)
        return writeJson(this.paths.package, data, cb);
    }

    /**
     * getModulePackage
     * Reads the module `package.json` file.
     *
     * @name getModulePackage
     * @function
     * @param {String} name The module name.
     * @return {Object} The `package.json` content as json (if called without a callback function).
     */
    getModulePackage (name, cb) {
        return readJson(this.paths.modulePack(name), cb);
    }

    /**
     * setModulePackage
     * Writes the module `package.json` file.
     *
     * @name setModulePackage
     * @function
     * @param {String} name The module name.
     * @param {Object} data The data to set in the file.
     */
    setModulePackage (name, data, cb) {
        return writeJson(this.paths.modulePack(name), data, cb);
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
    createInstance (name, data, cb) {
        return this.crud.create(name, data, cb);
    }

    /**
     * readInstance
     * Gets the instance content.
     *
     * @name readInstance
     * @function
     * @param {String} name The instance name.
     * @param {Function} cb The callback function.
     */
    readInstance (name, cb) {
        this.crud.read(name, cb);
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
    updateInstance (name, data, cb) {
        return this.crud.update(name, data, cb);
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
    removeInstance (name, cb) {
        return this.crud.remove(name, cb);
    }

    /**
     * listInstances
     * List instances.
     *
     * @name listInstance
     * @function
     * @param {Function} cb The callback function.
     */
    listInstances (cb) {
        return this.crud.list(cb);
    }

    /**
     * getAllInstances
     * Read all instances.
     *
     * @name getAllnstances
     * @function
     * @param {Function} cb The callback function.
     */
    getAllInstances (cb) {
        return this.crud.readAll(cb);
    }

    /**
     * renameInstance
     * Renames the specified instance.
     *
     * @name renameInstance
     * @function
     * @param {String} oldName The old instance name.
     * @param {String} newName The new instance name.
     * @param {Function} cb The callback function.
     */
    renameInstance (oldName, newName, cb) {
        return this.crud.rename(oldName, newName, cb);
    }

    /**
     * upsertInstance
     * Creates or updates the specified instance.
     *
     * @name upsertInstance
     * @function
     * @param {String} name The instance name.
     * @param {Object} data The instance content.
     * @param {Function} cb The callback function.
     */
    upsertInstance (name, data, cb) {
        return this.crud.upsert(name, data, cb);
    }
}

module.exports = EngineApp;
