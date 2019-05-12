require('lodash');
var webpackNumbers = require('./webpack-numbers.js');
var out = function () {
    process.stdout.write('This is the result for numToWord(1) === ' + webpackNumbers.numToWord(1));
};
out();
