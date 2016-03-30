'use strict';

var R = require('ramda');

var maybeDropLastItem = R.curry(function(dropIfGte, items) {
  return R.ifElse(R.compose(R.flip(R.gte)(dropIfGte), R.length), R.dropLast(1), R.clone)(items);
});

module.exports = maybeDropLastItem;
