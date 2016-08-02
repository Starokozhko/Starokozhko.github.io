 module.exports = function (grunt) {

 	grunt.initConfig({
 		concat: {
 			options: {
 				separator: ';'
 			},
 			dist: {
 				src: ['src/js/src/*.js'],
 				dest: 'src/js/dist/script.min.js'
 			}
 		},
 		cssmin: {
 			options: {
 				shorthandCompacting: false,
 				roundingPrecision: -1
 			},
 			target: {
 				files: {
 					'src/css/dist/style.css': ['src/css/src/style_grunt.css']
 				}
 			}

 		},
 		csso: {
 			dynamic_mappings: {
 				expand: true,
 				cwd: 'src/css/dist/',
 				src: ['*.css', '!*.min.css'],
 				dest: 'bild/css/',
 				ext: '.css'
 			}
 		},
 		uglify: {
 			dist: {
 				src: ['src/js/dist/script.min.js'],
 				dest: 'bild/js/script.js'
 			}
 		},
 		watch: {
 			scripts: {
 				files: ['src/js/src/*.js'],
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

 	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'csso', 'watch']);
 };