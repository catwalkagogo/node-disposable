var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Disposable = require('../index');

var Object = (function (_super) {
    __extends(Object, _super);
    function Object() {
        _super.apply(this, arguments);
    }
    Object.prototype.invoke = function () {
        this.__throwIfDisposed();

        console.log('invoke');
    };

    Object.prototype.__finalize = function (disposing) {
        console.log('finalize: ' + (disposing ? 'dispose' : 'exit'));
    };
    return Object;
})(Disposable.Object);

module.exports = Object;
//# sourceMappingURL=Object.js.map
