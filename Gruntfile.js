module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      files: {
        src: 'src/*.js',
        dest: 'build/',
        expand: true,
        flatten: true,
        ext: '.min.js'
      }
    },
    watch: {
      js: {
        files: 'src/*.js',
        tasks: ['uglify']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register default tasks
  grunt.registerTask('default', ['uglify']);

};
