# alien-node-list-utils
Helper functions for arrays on NodeJS. The functions are pure and curried with Ramda.

[![Build Status](https://travis-ci.org/AlienCreations/alien-node-list-utils.svg?branch=master)](https://travis-ci.org/AlienCreations/alien-node-list-utils) [![Coverage Status](https://coveralls.io/repos/AlienCreations/alien-node-list-utils/badge.svg?branch=master&service=github)](https://coveralls.io/github/AlienCreations/alien-node-list-utils?branch=master) [![npm version](http://img.shields.io/npm/v/alien-node-list-utils.svg)](https://npmjs.org/package/alien-node-list-utils) [![Dependency Status](https://david-dm.org/AlienCreations/alien-node-list-utils.svg)](https://david-dm.org/AlienCreations/alien-node-list-utils)

## Install

```
$ npm install alien-node-list-utils --save
```

Run the specs

```
$ npm test
```

## Methods

#### filterOutItem
Given a list and an item, returns a copy of the list absent said item.

```js

var listUtils  = require('alien-node-list-utils'),
    list       = ['a', 'b', 'c', 'd'];
    
listUtils.filterOutItem('b', list); // ['a', 'c', 'd']

```

#### filterOutObject
Given a key, value, and list, returns a copy of the list absent the object(s) which match said k/v pair.

```js

var listUtils = require('alien-node-list-utils'),
    list      = [{ foo : 'bar'}, {baz : 'bat'}, {buz : 'but'}];
    
listUtils.filterOutObject('baz', 'bat', list); // [{ foo : 'bar'}, {buz : 'but'}]

```

#### maybeDropLastItem
Given a qualifying drop length and a list, returns a new list who's last item is dropped if the list 
length exceeds or equals provided drop length

```js

var listUtils = require('alien-node-list-utils'),
    list1     = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
    list2     = ['x', 'y', 'z'];

listUtils.maybeDropLastItem(5, list1); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
listUtils.maybeDropLastItem(5, list2); // ['x', 'y', 'z']

```

#### sortAsc
Simple ascending sorter function

```js

var listUtils = require('alien-node-list-utils'),
    list      = ['b', 'd', 'a', 'c'];

listUtils.sortAsc(list1); // ['a', 'b', 'c', 'd']

```

#### sortDesc
Simple descending sorter function

```js

var listUtils = require('alien-node-list-utils'),
    list      = ['b', 'd', 'a', 'c'];

listUtils.sortDesc(list1); // ['d', 'c', 'b', 'a']

```
