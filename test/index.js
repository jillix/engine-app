const tester = require("tester")
    , EngineApp = require("../lib")
    ;

// Initialize the app
var myApp = new EngineApp(`${__dirname}/../example/example-app`);

tester.describe("testing the CRUD operations", test => {
    test.it("create package.json", cb => {
        // Create the package
        myApp.setPackage({
            name: "example-app"
        }, cb);
    });

    test.it("read package.json", cb => {
        myApp.getPackage((err, data) => {
            test.expect(err).toBe(null);
            test.expect(data).toEqual(myApp.getPackage());
            cb();
        });
    });

    test.it("create instance", cb => {
        myApp.createInstance("layout", err => cb(err));
    });

    test.it("read instance", cb => {
        myApp.readInstance("layout", (err, data) => {
            test.expect(err).toBe(null);
            test.expect(data).toEqual({ name: "layout" });
            cb();
        });
    });

    test.it("remove instance", cb => myApp.removeInstance("layout", cb));
});
