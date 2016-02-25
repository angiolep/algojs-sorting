'use strict';

/**
 * It provides sorting algorithms:
 *
 * ```javascript
 *  var sort = require('algojs-sorting').insertionSort;
 *
 *  var array = [7,2,4,3,1,5,6,8];
 *  sort(array);
 * ```
 *
 * @module algojs-sorting
 */


/**
 * Test if the give argument is an Array
 *
 * @param {*} a is the argument being tested
 * @returns {boolean} true if the given argument is an Array
 */
function isArray (a) {
  return a !== null && a !== undefined && a.constructor === Array;
}

/**
 * Test if the give argument is a Number
 *
 * @param {*} a is the argument being tested
 * @returns {boolean} true if the given argument is an Number
 */
function isNumber(a) {
  return typeof a === 'number';
}


/**
 * It compares the given arguments according to their well known types
 *
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function compare(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a === b ? 0 : ( a > b ? 1 : -1);
  }
  // TODO else if (...)
  else {
    // TODO execute a code coverage tool
    throw 'unsupported comparison';
  }
}


function exch(arr, i, j) {
  if (isArray(arr)) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

/**
 * It returns a random integer between min (included) and max (included)
 *
 * @param {Number} min the minimum (included)
 * @param {Number} max the maximum (included)
 * @return {Number} the random integer
 */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



var self = module.exports = {

  /**
   * It selects the index of the smallest element of the given array
   * from the given start index to the given end index.
   *
   * @param {Array} arr is the array of elements to be compared
   * @param {Function} cmpr is the function to compare elements
   * @param {Number} start is the start index (0 by default)
   * @param {Number} end is the end index ((array.length - 1) by default)
   *
   * @returns {Number} the index of the smallest element of the given array
   */
  selectMinimumIndex: function (arr, cmpr, start, end) {
    if (isArray(arr) && arr.length > 0) {
      var min = start || 0;
      cmpr = cmpr || compare;
      start = start || 0;
      end = end || arr.length;
      for (var j = start + 1; j < end; j++) {
        if (cmpr(arr[j], arr[min]) < 0) {
          min = j;
        }
      }
      return min;
    }
  },


  /**
   * It sorts the given array as side effect, applying the selection sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} cmpr is the function to compare elements
   * @see https://en.wikipedia.org/wiki/Selection_sort
   */
  selectionSort: function(arr, cmpr) {
    if (isArray(arr)) {
      var min;
      for (var i = 0; i < arr.length; i++) {
        min = self.selectMinimumIndex(arr, cmpr, i);
        exch(arr, i, min);
      }
    }
  },


  /**
   * It sorts the given array as side effect, applying the insertion sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} cmpr is the function to compare elements
   *
   * @see https://en.wikipedia.org/wiki/Insertion_sort
   */
  insertionSort: function(arr, cmpr) {
    if (isArray(arr)) {
      cmpr = cmpr || compare;
      var j;
      for (var i = 0; i < arr.length; i++) {
        // in iteration i, swap arr[i] with each larger entry to its left
        j = i;
        while(j > 0 && cmpr(arr[j], arr[j-1]) < 0) {
          exch(arr, j, j - 1);
          j = j - 1;
        }
      }
    }
  },


  /**
   * It sorts the given array as side effect, applying the shell sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} cmpr is the function to compare elements
   *
   * @see https://en.wikipedia.org/wiki/Shell_sort
   */
  shellSort: function(arr, cmpr) {
    if (isArray(arr)) {
      cmpr = cmpr || compare;
      var len = arr.length, h = 1, j;

      // 1, 4, 13, 40, 121, 364, ...
      while (h < len / 3)  { h = h * 3 + 1; }

      while (h >= 1) {
        for (var i = h; i < arr.length; i++) {
          j = i;
          while (j >= h && cmpr(arr[j], arr[j-h]) < 0) {
            exch(arr, j, j-h);
            j = j - h;
          }
        }
        h = Math.floor(h / 3);
      }
    }
  },


  /**
   * It shuffles the given array as side effect, applying the Knuth shuffle algorithm
   *
   * @param {Array} arr is the array being shuffled
   * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
   */
  knuthShuffle: function(arr) {
    if (isArray(arr)) {
      for (var i = 0; i < arr.length; i++) {
        // In iteration i, pick integer r between 0 and i uniformly at random
        exch(arr, i, random(0, i));
      }
    }
  }
};

