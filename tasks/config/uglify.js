/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		my_target: {
			options: {
	      		mangle: false
	    	},
		    files: {
				'.tmp/public/js/dist/production.base.min.js': ['.tmp/public/concat/production.base.js'],
				'.tmp/public/js/dist/production.min.js': ['.tmp/public/concat/production.js'],
				'.tmp/public/js/dist/production.all.min.js': ['.tmp/public/concat/production.all.js']
			}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
