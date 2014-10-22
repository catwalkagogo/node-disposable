var Object = require('./Object');

var obj = new Object();
obj.invoke();

process.on('SIGINT', function () {
    console.log('SIGINT2');
    process.exit(2);
});

setTimeout(function () {
    process.exit();
}, 30000);
//# sourceMappingURL=test_sigint.js.map
