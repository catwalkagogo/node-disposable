import Disposable = require('../index');
import Object = require('./Object');

var objects = [];
for(var i = 0;i < 32;i++) {
	objects.push(new Object());
}