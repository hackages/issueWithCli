#! /usr/bin/env node


// require('babel-core/register');
// require('babel-runtime');
require('babel-register')({
  presets: ['es2015', 'stage-0'],
  plugins: ['transform-runtime']
});

require('../index');
