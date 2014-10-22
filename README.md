# node-disposable

# Overview

This module provides an object with finalizer and IDisposable interface via .Net for NodeJS.

# Usage

## Create a class with finalizer

	// TypeScript
	import Disposable = require('node-disposable');
	
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


+ Import 'node-disposable' module.
+ Extend 'node-disposable'.Object class.
+ Override __finalize method and implement resource disposing codes in it.

__finalize method is called on either calling dispose method, object is GC'd or process.exit event is fired.

## Dispose

	var obj = new Object();
	obj.dispose(); // __finalize will be called.

## Using

	import Disposable = require('node-disposable');
	
	Disposable.using(new Object(), obj => {
		// codes using Object
	});
	// Object is disposed.

## Note
Finalizer won't run when the node process is terminated by SIGINT. To handle this problem, call finalize method on SIGINT.

	import Disposable = require('node-disposable');
	process.on('SIGINT', function(){
		Disposable.finalize();
		process.exit(-1);
	});

# API

## class Object

### function dispose

Dispose object.

### function __finalize(disposing: boolean)

Finalizer method.

disposing:true Dispose method called.
disposing:false process.exit.

### function __throwIfDisposed

Throws an error if object is disposed.

### property isDisposed: boolean

ture if object is disposed.

## function using(obj: IDisposable, callback: obj => any)

Execute callback with an obj. The obj will be disposed after the callback.

## function finalize()

Execute finalizers of all objects allocated.

## function register(obj:IDisposable)

Register IDisposable object that will be handled as a disposable object. 

## interface IDisposable

### function dispose

## Changelog

### 0.2.3
+ Fix bugs on finalize.

### 0.2.2
+ Fix bugs.

### 0.2.1
+ Fix npm repositry

### 0.2.0
+ Add register function.

### 0.1.0
+ Finalizer will be called when the object is GC'd.
+ Add finalize function.

### 0.0.0

+ initial release.