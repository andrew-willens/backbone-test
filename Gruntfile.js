module.exports = function(grunt) {
  
  grunt.initConfig({
    browserify: {
      'public/script/vendor/deep-model.min.js': ['node_modules/backbone-deep-model/distribution/deep-model.min.js']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);
};