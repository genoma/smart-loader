module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        src:  'js/smart-loader.js',
        dest: 'js/smart-loader.min.js'
      }
    },
    watch: {
      scripts: {
        files: 'js/smart-loader.js',
        tasks: ['uglify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('spawn', ['watch']);

};