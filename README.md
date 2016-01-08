# engine-app

Engine app related helper functions.

## Installation

```sh
$ npm i --save engine-app
```

## Example

```js
const EngineApp = require("engine-app");

// Initialize the app
var myApp = new EngineApp(__dirname + "/example-app");

// Create the package
myApp.setPackage({
    name: "example-app"
})

console.log(myApp.getPackage());
// => { name: 'example-app' }

// Create the layout instance
myApp.createInstance("layout", (err, data) => {

    // Read the layout instance
    myApp.readInstance("layout", (err, data) => {
        console.log(err || data);
        // => { name: 'layout' }
    });
});
```

## Documentation

### `EngineApp(appPath)`
Creates a new instance of `EngineApp`.

#### Params
- **String** `appPath`: The app path.

### `getPackage(cb)`
Gets the package.json content.

#### Params
- **Function** `cb`: The callback function.

#### Return
- **Object** The `package.json` content as json (if called without a callback function).

### `setPackage(data, cb)`
Sets the package.json content.

#### Params
- **Object** `data`: The data to set in the file.
- **Function** `cb`: The callback function.

### `getModulePackage(name)`
Reads the module `package.json` file.

#### Params
- **String** `name`: The module name.

#### Return
- **Object** The `package.json` content as json (if called without a callback function).

### `setModulePackage(name, data)`
Writes the module `package.json` file.

#### Params
- **String** `name`: The module name.
- **Object** `data`: The data to set in the file.

### `createInstance(name, data, cb)`
Creates a new instance.

#### Params
- **String** `name`: The instance name.
- **Object** `data`: The instance content.
- **Function** `cb`: The callback function.

### `readInstance(name, cb)`
Gets the instance content.

#### Params
- **String** `name`: The instance name.
- **Function** `cb`: The callback function.

### `updateInstance(name, data, cb)`
Updates an instance.

#### Params
- **String** `name`: The instance name.
- **Object** `data`: The instance content.
- **Function** `cb`: The callback function.

### `removeInstance(name, cb)`
Removes an instance.

#### Params
- **String** `name`: The instance name.
- **Function** `cb`: The callback function.

### `listInstance(cb)`
listInstances
List instances.

#### Params
- **Function** `cb`: The callback function.

### `getAllnstances(cb)`
getAllInstances
Read all instances.

#### Params
- **Function** `cb`: The callback function.

### `renameInstance(oldName, newName, cb)`
Renames the specified instance.

#### Params
- **String** `oldName`: The old instance name.
- **String** `newName`: The new instance name.
- **Function** `cb`: The callback function.

### `upsertInstance(name, data, cb)`
Creates or updates the specified instance.

#### Params
- **String** `name`: The instance name.
- **Object** `data`: The instance content.
- **Function** `cb`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=2015#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md