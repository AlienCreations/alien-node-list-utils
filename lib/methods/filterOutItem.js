'use strict';

var R = require('ramda');

var filterOutItem = R.curry(function(v, items) {
  return R.filter(R.compose(R.not, R.identical(v)), items);
});

module.exports = filterOutItem;
