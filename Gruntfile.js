'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    paths: {
      app: './app',
      tmp: '.tmp',
      dist: './dist'
    },
    clean: {
      dev: ['<%= paths.tmp %>'],
      dist: ['<%= paths.dist %>']
    },
    less: {
      options: {
        compress: true,
        paths: ['<%= paths.app %>/styles/elements']
      },
      dev: {
        files: {
          '<%= paths.tmp %>/styles/style.css': '<%= paths.app %>/styles/style.less'
        }
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= paths.app %>',
          dest: '<%= paths.tmp %>',
          src: [
            '*.{ico,png,txt,php}',
            'scripts/**/*',
            'vendor/**/*',
            'views/**/*',
            'images/**/*',
            'fonts/*',
            'styles/**/*.css'
          ]
        }]
      }
    },
    watch: {
      less: {
        files: '<%= paths.app %>/styles/**/*.less',
        tasks: ['less:dev']
      },
      copy: {
        files: [
          '<%= paths.app %>/*.{ico,png,txt,php}',
          '<%= paths.app %>/scripts/**/*',
          '<%= paths.app %>/vendor/**/*',
          '<%= paths.app %>/views/**/*',
          '<%= paths.app %>/images/**/*',
          '<%= paths.app %>/fonts/**/*',
          '<%= paths.app %>/styles/**/*.css'
        ],
        tasks: ['copy:dev']
      }

    }
  });

  grunt.registerTask('dev', [
    'clean:dev',
    'less:dev',
    'copy:dev',
    'watch'
  ]);

  grunt.loadNpmTasks('grunt-contrib');
};