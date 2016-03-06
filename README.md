# algojs-sorting
Best sorting algorithms on Javascript arrays.

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]


## API docs
API docs published <a href="http://angiolep.github.io/algojs-sorting" target="_blank">here</a>.


```javascript
var algojs = require('algojs-sorting');

var arr = [88,24,33,2,12,9];
algojs.quickSort(arr);

// --> arr is sorted!
```


## Algorithms

|              | in place? | stable | worse    | average  | best     |
---------------|-----------|--------|----------|----------|----------|  
|selectionSort | x         |        | N^2 / 2  | N^2 / 2  | N^2 / 2  |
|insertionSort | x         | x      | N^2 / 2  | N^2 / 4  | N        |
|shellSort     | x         |        | ?        | ?        | N        |
|mergeSort     |           | x      | N * logN | N * logN | N * logN |



### Selection Sort
Array is sorted as side effect in average quadratic time. See [selection sort](https://en.wikipedia.org/wiki/Selection_sort).

```javascript
algojs.selectionSort(arr);
```


### Insertion Sort
Array is sorted as side effect in average quadratic time (but linear in best case). See [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort).

```javascript
algojs.insertionSort(arr);
```

### Shell Sort
Array is sorted as side effect in unknown average time (but linear in best case). See [shell sort](https://en.wikipedia.org/wiki/Shell_sort) 

```javascript
algojs.shellSort(arr);
```

### Merge Sort
Array is sorted as side effect in linearithmic time. See [merge sort](https://en.wikipedia.org/wiki/Merge_sort) 

```javascript
algojs.shellSort(arr);
```



[npm-image]: https://badge.fury.io/js/algojs-sorting.svg
[npm-url]: https://badge.fury.io/js/algojs-sorting

[travis-image]: https://travis-ci.org/angiolep/algojs-sorting.svg?branch=master
[travis-url]: https://travis-ci.org/angiolep/algojs-sorting

[coveralls-image]: https://coveralls.io/repos/github/angiolep/algojs-sorting/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/angiolep/algojs-sorting?branch=master


