declare module "node-disposable" {
	interface IDisposable {
		dispose(): void;
	}

	class Object implements IDisposable {
		private __disposed;
		constructor();
		public __throwIfDisposed(): void;
		public isDisposed : boolean;
		public dispose(): void;
		public __finalize(disposing?: boolean): void;
	}

	function using<T extends IDisposable>(resource: T, callback: (resource: T) => any): void;
	function finalize(): void;
	function register(obj:IDisposable): void;
}
