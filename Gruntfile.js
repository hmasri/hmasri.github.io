module.exports = function(grunt) {
	grunt.initConfig({
		
		bowercopy: {
			options: {
				destPrefix: 'components',
				runBower: false,
			},
			// Entire folders 
			folders: {
				files: {
					// Note: when copying folders, the destination (key) will be used as the location for the folder 
					'bootstrap': 'bootstrap/dist',
					'font-awesome/css': 'font-awesome/css',
					'font-awesome/fonts': 'font-awesome/fonts',
					'jquery': 'jquery/dist',
					'ekko-lightbox': 'ekko-lightbox/dist',
					//'lightbox2': 'lightbox2/dist',
					'classie': 'classie/classie.js',
					'jquery.easing': 'jquery.easing/js',
					'jqBootstrapValidation': 'jqBootstrapValidation/dist',
					'AnimatedHeader': 'AnimatedHeader/js',
				}
			},
		},
	});

  grunt.loadNpmTasks('grunt-bowercopy');

  // Default task(s).
  grunt.registerTask('default', ['bowercopy']);

};
