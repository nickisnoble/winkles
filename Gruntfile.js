module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      scss: {
        options: {
          sassDir: 'scss',
          cssDir: 'css'
        }
      }
    },
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      css: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass','csscomb']
      }
    },
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-csscomb');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};