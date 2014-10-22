module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		pkg: pkg,
		ts: {
			build: {
				src: ['ts/**/*.ts', 'ts/typings/**/*.d.ts'],
				options: {
					module: 'commonjs', //or commonjs
					target: 'es5', //or es3
					sourceMap: true,
					declaration: true
				}
			}
		},
		typescript_export: {
			build: {
				src: ['ts/lib/*.d.ts'],
				dest: pkg.name + '.d.ts'
			},
		},
		copy: {
			build: {
				files: [
                    {
                    	expand: true,
                    	cwd: 'ts',
                    	src: ['**/*.js'],
                    	dest: './'
                    }
				]
			}
		},
		clean: {
			build: {
				src: ['./ts/lib/**/*.d.ts', './ts/test/**/*.d.ts', './ts/**/*.js', './ts/**/*.map', './ts/index.d.ts'],
			}
		},
		uglify: {
			dist: {
				files: {
					//'index.min.js': ['index.js']
				}
			}
		},
		watch: {
			files: ['ts/**/*.ts'],
			tasks: ['typescript', 'uglify']
		}
	});

	var taskName;
	for (taskName in pkg.devDependencies) {
		if (taskName.substring(0, 6) == 'grunt-') {
			console.log(taskName);
			grunt.loadNpmTasks(taskName);
		}
	}

	grunt.registerTask('build', ['ts', 'copy', 'clean']);
	grunt.registerTask('default', ['build']);
};