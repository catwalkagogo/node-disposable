var Disposable = require('../index');
var Object = require('./Object');

Disposable.using(new Object(), function (obj) {
    console.log('using');
    obj.invoke();
});
//# sourceMappingURL=test_using.js.map
