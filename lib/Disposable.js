var weak = require('weak');

var disposables = [];

var onExit = function () {
    exports.finalize();
};

process.once('exit', onExit);

var Class = (function () {
    function Class() {
        exports.register(this);
    }
    Class.prototype.__throwIfDisposed = function () {
        if (this.isDisposed) {
            throw new Error('Object was disposed.');
        }
    };

    Object.defineProperty(Class.prototype, "isDisposed", {
        get: function () {
            return this.__disposed;
        },
        enumerable: true,
        configurable: true
    });

    Class.prototype.dispose = function () {
        this.__finalize(!exports.finalize);
        this.__disposed = true;

        var idx = disposables.indexOf(this);
        if (idx >= 0) {
            disposables.splice(idx, 1);
        }
    };

    Class.prototype.__finalize = function (disposing) {
    };
    return Class;
})();
exports.Class = Class;

function using(resource, callback) {
    try  {
        callback(resource);
    } finally {
        resource.dispose();
    }
}
exports.using = using;

function finalize() {
    while (disposables.length > 0) {
        disposables[0].dispose();
    }
}
exports.finalize = finalize;

function register(disposable) {
    disposables.push(disposable);
    weak(disposable, function () {
        disposable.dispose();
    });
}
exports.register = register;
//# sourceMappingURL=Disposable.js.map
