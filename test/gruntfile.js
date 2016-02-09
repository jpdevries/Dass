module.exports = function(grunt) {
  grunt.initConfig({
      sass: {
          options: {
              sourceMap: false
          },
          dist: {
              files: {
                  'test.css': 'test.scss'
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};
