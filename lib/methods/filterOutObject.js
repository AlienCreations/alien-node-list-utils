'use strict';

var R = require('ramda');

var filterOutObject = R.curry(function(k, v, items) {
  return R.filter(R.compose(R.not, R.identical(v), R.prop(k)), items);
});

module.exports = filterOutObject;
