import Disposable = require('../index');

class Object extends Disposable.Object {
	public invoke() {
		this.__throwIfDisposed();

		console.log('invoke');
	}

	public __finalize(disposing) {
		console.log('finalize: ' + (disposing ? 'dispose' : 'exit'));
	}
}

export = Object;