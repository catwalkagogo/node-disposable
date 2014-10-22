declare module 'weak' {
	module weak {
		interface WeakRef { }

		function get(ref: WeakRef): Object;
		function isDead(ref: WeakRef): boolean;
		function isNearDeath(ref: WeakRef): boolean;
		function isWeakRef(obj: Object): boolean;
		function addCallback(ref: WeakRef, callback: Function): void;
		function callbacks(ref: WeakRef): Function[];
	}
	function weak(obj: Object, callback: (obj?: Object) => any): weak.WeakRef;

	export = weak;
}