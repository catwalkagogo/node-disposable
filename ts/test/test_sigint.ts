import Disposable = require('../index');
import Object = require('./Object');

var obj = new Object();
obj.invoke();

process.on('SIGINT', () => {
	console.log('SIGINT2');
	process.exit(2);
});

setTimeout(() => {
	process.exit();
}, 30000);