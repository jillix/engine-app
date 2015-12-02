const EngineApp = require("../lib");

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
