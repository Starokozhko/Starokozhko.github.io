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
 			target: {
 				files: [{
 					expand: true,
 					cwd: 'css/src',
 					src: ['*.css', '!*.min.css'],
 					dest: 'css/dist',
 					ext: '.min.css',
 					 'css/dist/style.css': ['css/dist/*.css']
 				}]
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
 				files: ['sj/src/*.js'],
 				tasks: ['concat','uglify'],
 				options: {
 					spawn: false,
 				},
 			},
 		},
 	});
 	grunt.loadNpmTasks('grunt-contrib-concat');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-contrib-cssmin');

 	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
 };