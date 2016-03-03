# algojs-sorting
Best sorting algorithms on Javascript arrays.

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

## API docs
API docs published <a href="http://angiolep.github.io/algojs-sorting" target="_blank">here</a>.


```javascript
var algojs = require('algojs-sorting').selectionSort;
```


### Selection Sort
In place [selection sort](https://en.wikipedia.org/wiki/Shell_sort)

```javascript
var arr = [7,2,4,3,1,5,6,8];
var sorted = algojs.selectionSort(arr);
// assert arr === sorted;
```


### Insertion Sort
In place [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort).

```javascript
var arr = [7,2,4,3,1,5,6,8];
var sorted = algojs.insertionSort(arr);
// assert arr === sorted;
```

### Shell Sort
In place [shell sort](https://en.wikipedia.org/wiki/Selection_sort) 

```javascript
var arr = [7,2,4,3,1,5,6,8];
var sorted = algojs.shellSort(arr);
// assert arr === sorted;
```

[npm-image]: https://badge.fury.io/js/algojs-sorting.svg
[npm-url]: https://badge.fury.io/js/algojs-sorting

[travis-image]: https://travis-ci.org/angiolep/algojs-sorting.svg?branch=master
[travis-url]: https://travis-ci.org/angiolep/algojs-sorting

[coveralls-image]: https://coveralls.io/repos/github/angiolep/algojs-sorting/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/angiolep/algojs-sorting?branch=master


