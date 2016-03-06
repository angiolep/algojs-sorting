'use strict';


/** @private */
var dup = function(arr, lo, hi) {
  var aux = new Array();
  for (var i = lo; i <= hi; i++) {
    aux[i] = arr[i];
  }
  return aux;
};


/** @private */
var merge = function(arr, lo, mid, hi, cmpr) {
  cmpr = cmpr || self.compare;
  var aux = dup(arr, lo, hi);
  var i = lo, j = mid + 1;
  for (var k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = aux[j]; j = j + 1;
    }
    else if (j > hi) {
      arr[k] = aux[i]; i = i +1;
    }
    else if (cmpr(aux[j], aux[i]) === -1) {
      arr[k] = aux[j]; j = j + 1;
    }
    else {
      arr[k] = aux[i]; i = i + 1;
    }
  }
};



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
    
var self = module.exports = {

  /**
   * Test if the give argument is an Array
   *
   * @param {*} arg is the argument being tested
   * @returns {boolean} true if the given argument is an Array
   */
  isArray: function (arg) {
    return arg !== null && arg !== undefined && arg.constructor === Array;
  },


  /**
   * Test if the give argument is a Number
   *
   * @param {*} arg is the argument being tested
   * @returns {boolean} true if the given argument is a Number
   */
  isNumber: function(arg) {
    return typeof arg === 'number';
  },

  /**
   * Test if the give argument is a String
   *
   * @param {*} arg is the argument being tested
   * @returns {boolean} true if the given argument is a String
   */
  isString: function(arg) {
    return typeof arg === 'string';
  },

  /**
   * Test if the give argument is a Date
   *
   * @param {*} arg is the argument being tested
   * @returns {boolean} true if the given argument is a Date
   */
  isDate: function(arg) {
    return arg !== null && arg !== undefined && arg.constructor === Date;
  },

  
  /**
   * It compares given arguments of same type returning -1, 0 or 1.
   * Following are the types this function is able to compare:
   * 
   *  - String
   *  - Number
   *  - Date
   *
   * @param {*} a is an argument to be compared
   * @param {*} b is an argument to be compared
   * 
   * @returns {number} -1, 0 or 1 if a<b, a==b or a>b
   */
  compare: function(a, b) {
    if (self.isNumber(a) && self.isNumber(b) ||
        self.isString(a) && self.isString(b) ||
        self.isDate(a) && self.isDate(b)) 
    {
      if (a > b) { return 1; }
      else if (a < b) { return -1; }
      else { return 0; }
    }
    // TODO else if (...)
    else {
      throw 'unsupported comparison';
    }
  },

  /**
   * It selects the index of the smallest element of the given array
   * from the given start index to the given end index.
   *
   * @param {Array} arr is the array of elements to be compared
   * @param {Number} lo is the start index (0 by default)
   * @param {Number} hi is the end index ((array.length - 1) by default)
   * @param {Function} cmpr is the function to compare elements
   *
   * @returns {Number} the index of the smallest element of the given array
   */
  min: function (arr, lo, hi, cmpr) {
    if (self.isArray(arr) && arr.length > 0) {
      var m = lo || 0;
      lo = lo || 0;
      hi = hi || arr.length;
      cmpr = cmpr || self.compare;
      for (var j = lo + 1; j < hi; j++) {
        if (cmpr(arr[j], arr[m]) < 0) {
          m = j;
        }
      }
      return m;
    }
  },


  /**
   * It swaps two elements of the given array as side effect.
   * 
   * @param {Array} arr is the array of elements being swapped 
   * @param i is the index of one of the elements being swapped
   * @param j is the index of one of the elements being swapped
   */
  swap: function(arr, i, j) {
    if (self.isArray(arr) && 
        (i>=0 && i<arr.length) && 
        (j>=0 && j<arr.length)) {
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    else {
      throw 'bad input';
    }
  },


  /**
   * It sorts the given array as side effect, applying the selection sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} cmpr is the function to compare elements
   * 
   * @see https://en.wikipedia.org/wiki/Selection_sort
   */
  selectionSort: function(arr, cmpr) {
    if (self.isArray(arr)) {
      var min;
      var len = arr.length;
      for (var i = 0; i < len; i++) {
        min = self.min(arr, i, len, cmpr);
        self.swap(arr, i, min);
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
    if (self.isArray(arr)) {
      cmpr = cmpr || self.compare;
      var j;
      for (var i = 0; i < arr.length; i++) {
        // in iteration i, swap arr[i] with each larger entry to its left
        j = i;
        while(j > 0 && cmpr(arr[j], arr[j-1]) < 0) {
          self.swap(arr, j, j - 1);
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
    if (self.isArray(arr)) {
      cmpr = cmpr || self.compare;
      var len = arr.length, h = 1, j;

      // 1, 4, 13, 40, 121, 364, ...
      while (h < len / 3)  { h = h * 3 + 1; }

      while (h >= 1) {
        for (var i = h; i < arr.length; i++) {
          j = i;
          while (j >= h && cmpr(arr[j], arr[j-h]) < 0) {
            self.swap(arr, j, j-h);
            j = j - h;
          }
        }
        h = Math.floor(h / 3);
      }
    }
  },


  /**
   * It returns a random integer between min (included) and max (included)
   *
   * @param {Number} min the minimum (included)
   * @param {Number} max the maximum (included)
   * @return {Number} the random integer
   */
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  
  /**
   * It shuffles the given array as side effect, applying the Knuth shuffle algorithm
   *
   * @param {Array} arr is the array being shuffled
   * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
   */
  knuthShuffle: function(arr) {
    if (self.isArray(arr)) {
      for (var i = 0; i < arr.length; i++) {
        // In iteration i, pick integer r between 0 and i uniformly at random
        self.swap(arr, i, self.random(0, i));
      }
    }
  },


  /**
   * It sorts the given array as side effect, applying the merge sort algorithm.
   *
   * @param {Array} arr is the array being sorted
   * @param {Function} cmpr is the function to compare elements
   *
   * @see https://en.wikipedia.org/wiki/Merge_sort
   */
  mergeSort: function(arr, cmpr) {
    if (self.isArray(arr)) {

      var sort = function(arr, lo, hi) {
        if (hi <= lo) {
          return;
        } 
        else {
          var mid = lo + Math.floor((hi - lo) / 2);
          sort(arr, lo, mid);
          sort(arr, mid + 1, hi);
          merge(arr, lo, mid, hi, cmpr);
        }
      };
      
      sort(arr, 0, arr.length - 1);
    }
  }
};

