import Disposable = require('../index');
import Object = require('./Object');

Disposable.using(new Object(), obj => {
	console.log('using');
	obj.invoke();
});