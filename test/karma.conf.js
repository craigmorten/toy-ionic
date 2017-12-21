var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {},
    files: [{
        pattern: './test/karma-test-shim.js',
        watched: true
      },
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],
    proxies: {
      '/assets/': '/base/src/assets/'
    },
    preprocessors: {
      './test/karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },
    singleRun: false
  });
};
