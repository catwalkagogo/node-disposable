var Object = require('./Object');

var obj = new Object();
obj.invoke();

obj = null;
setTimeout(function () {
    process.exit();
}, 3000);
//# sourceMappingURL=test_finalize.js.map
