#! /usr/bin/env node

console.log('running the cli');

require('babel-core/register');
// require('babel-register')({
//   presets: ['es2015', 'stage-0'],
//   plugins: ['transform-runtime']
// });

require('../index');
