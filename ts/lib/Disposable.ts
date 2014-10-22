import weak = require('weak');

var disposables: IDisposable[] = [];

var onExit = () => {
	finalize();
};

process.once('exit', onExit);

export class Class implements IDisposable {
	private __disposed: boolean;

	public constructor() {
		register(this);
	}

	__throwIfDisposed(): void {
		if(this.isDisposed) {
			throw new Error('Object was disposed.');
		}
	}

	public get isDisposed(): boolean {
		return this.__disposed;
	}

	public dispose() {
		this.__finalize(!finalize);
		this.__disposed = true;

		var idx = disposables.indexOf(this);
		if(idx >= 0) {
			disposables.splice(idx, 1);
		}
	}

	__finalize(disposing?: boolean) {

	}
}

export function using<T extends IDisposable>(resource: T, callback: (resource: T) => any): void {
	try {
		callback(resource);
	} finally {
		resource.dispose();
	}
}

export function finalize(): void {
	while(disposables.length > 0) {
		disposables[0].dispose();
	}
}

export function register(disposable: IDisposable): void {
	disposables.push(disposable);
	weak(disposable, () => {
		disposable.dispose();
	});
}