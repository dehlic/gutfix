module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    // Simple static web server.
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'test',
          keepalive: true
        }
      }
    },

    // Sass compiler.
    sass: {
      compile: {
        files: {
          'test/style.css': 'test/style.scss'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'connect'
  ]);
};
