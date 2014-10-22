import Disposable = require('../index');
import Object = require('./Object');

var obj = new Object();
obj.invoke();

obj = null;
setTimeout(() => {
	process.exit();
}, 3000);