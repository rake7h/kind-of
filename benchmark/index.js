'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  result: true,
  fixtures: 'fixtures/*.js',
  add: 'code/{current,lib-*}.js',
  cwd: __dirname
});

suite.run();