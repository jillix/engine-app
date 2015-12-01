"use strict";

const readJson = require("r-json")
    , writeJson = require("w-json")
    , abs = require("abs")
    , path = require("path")
    , enginePaths = require("engine-paths")
    ;

class EngineApp {
    constructor (appPath) {
        this.paths = new EnginePaths(appPath);
    }
    getPackage (fn) {
        return readJson(this.paths.package, fn);
    }
    setPackage (data, fn) {
        return readJson(this.package_path, data, fn);
    }
    readInstance (name, fn) {
        return readJson(path.join(
    }
}
