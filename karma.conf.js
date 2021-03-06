'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: [
      'jasmine',
      'browserify'
    ],

    files: [
      './node_modules/angular/index.js',
      './app/angular-utils.js',
      './app/Utils.js',
      './app/removeCommentsIfAdmin.js',
      './app/resolveLoader.js',
      './app/thEnter.js',
      './app/*_unit.js'
    ],

    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/*!(_unit).js': 'coverage',
      '**/!(jasmine).js': 'browserify',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress',
      // 'coverage'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    browserify: {
      debug: true
    }
  });
};
