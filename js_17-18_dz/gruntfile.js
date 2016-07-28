 module.exports = function (grunt) {

 	grunt.initConfig({
 		concat: {
 			options: {
 				separator: ';'
 			},
 			dist: {
 				src: ['js/src/*.js'],
 				dest: 'js/dist/script.min.js'
 			}
 		},
 		cssmin: {
 			options: {
 				shorthandCompacting: false,
 				roundingPrecision: -1
 			},
 			target: {
 				files: {
 					'css/dist/style.css': ['css/src/*.css']
 				}
 			}

 		},
 		csso: {
 			dynamic_mappings: {
 				expand: true,
 				cwd: 'css/dist/',
 				src: ['*.css', '!*.min.css'],
 				dest: 'css/',
 				ext: '.min.css'
 			}
 		},
 		uglify: {
 			dist: {
 				src: ['js/dist/script.min.js'],
 				dest: 'js/dist/script.min.js'
 			}
 		},
 		watch: {
 			scripts: {
 				files: ['js/src/*.js'],
 				tasks: ['concat','uglify'],
 				options: {
 					spawn: false,
 				},
 			},
 		},
 	});
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-cssmin');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-csso');

 	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'csso']);
 };