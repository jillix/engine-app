const EngineApp = require("../lib");

var myApp = new EngineApp(__dirname + "/example-app");
myApp.setPackage({
    name: "example-app"
})

console.log(myApp.getPackage());
