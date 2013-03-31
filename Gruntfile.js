module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*!\n * Copyright © 2013 Alessandro Vioni - coding - @jenoma\n *           © 2013 Marco Temperilli - images - @MARCOMAIK\n\n * MIT License\n\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),\n * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,\n * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n */\n\n'
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
