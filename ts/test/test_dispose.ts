import Disposable = require('../index');
import Object = require('./Object');

var obj = new Object();
obj.invoke();

obj.dispose();

obj.invoke();