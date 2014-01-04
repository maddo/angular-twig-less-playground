'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    paths: {
      app: './app',
      tmp: 'tmp',
      dist: './dist'
    },
    clean: {
      dev: ['<%= paths.tmp %>'],
      dist: ['<%= paths.dist %>']
    },
    less: {
      options: {
        compress: true,
        paths: [
          '<%= paths.app %>/styles/elements',
          '<%= paths.app %>/styles/pages'
        ]
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
            '*.{ico,png,txt,php,html}',
            'scripts/**/*',
            'views/**/*',
            'images/**/*',
            'fonts/*',
            'styles/**/*.css',
            '.htaccess',
            'favicon.ico'
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
          '<%= paths.app %>/*.{ico,png,txt,php,html}',
          '<%= paths.app %>/scripts/**/*',
          '<%= paths.app %>/views/**/*',
          '<%= paths.app %>/images/**/*',
          '<%= paths.app %>/fonts/**/*',
          '<%= paths.app %>/styles/**/*.css'
        ],
        tasks: ['copy:dev']
      }

    },
    htmlSnapshot: {
      all: {
        options: {
          snapshotPath: '<%= paths.tmp %>/snapshots/',
          sitePath: 'http://localhost:5000',
          removeScripts: true,
          removeLinkTags: true,
          fileNamePrefix: '',
          sanitize: function (requestUri) {
            return requestUri.replace(/\//g, '_');
          },
          urls: [
            '/',
            '/test',
            '/type/anaconda',
            '/type/assassin',
            '/type/barbarian',
            '/type/champion',
            '/type/escape-artist',
            '/type/genius',
            '/type/grinder',
            '/type/mad-scientist',
            '/type/magician',
            '/type/mastermind',
            '/type/natural',
            '/type/prodigy',
            '/type/professional',
            '/type/romantic',
            '/type/surgeon',
            '/type/technician'
          ]
        }
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
  grunt.loadNpmTasks('grunt-html-snapshot');
};