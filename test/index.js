var sorting = require('../index');
var expect = require('chai').expect;

module.exports = {
  'algojs-sorting':{
    '#selectMinIndex()': {
      'should return undefined when bad input': function() {
        expect(sorting.selectMinimumIndex()).to.be.undefined;
        expect(sorting.selectMinimumIndex(null)).to.be.undefined;
        expect(sorting.selectMinimumIndex('')).to.be.undefined;
        expect(sorting.selectMinimumIndex([])).to.be.undefined;
      },
      'should select the min index ': function () {
        expect(sorting.selectMinimumIndex([9, 5, 12, 8, 15, 6, 20])).to.equal(1);
      },
      'should select the min index applying the given comparator': function () {
        var arr = [{x:0, y:10}, {x:3, y:5}, {x:8, y:6}];
        var compare = function(a, b) {
          return a.y === b.y ? 0 : ( a.y > b.y ? 1 : -1);
        };
        var minIdx = sorting.selectMinimumIndex(arr, compare);
        expect(minIdx).to.equal(1);
      },
      'should select the min index from the given start index': function () {
        var arr = [9, 5, 12, 8, 15, 6, 20];
        expect(sorting.selectMinimumIndex(arr, null, 2)).to.equal(5);
      }
    },
    '#selectionSort()': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        sorting.selectionSort(arr);
        expect(arr).to.deep.equal([]);
      },
      'should do nothing when arr with single element is given': function() {
        var arr = [34];
        sorting.selectionSort(arr);
        expect(arr).to.deep.equal([34]);
      },
      'should sort the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        sorting.selectionSort(arr);
        expect(arr).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#insertionSort': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        sorting.insertionSort(arr);
        expect(arr).to.deep.equal([]);
      },
      'should do nothing when arr with single element is given': function() {
        var arr = [34];
        sorting.insertionSort(arr);
        expect(arr).to.deep.equal([34]);
      },
      'should sort the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        sorting.insertionSort(arr);
        expect(arr).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#shellSort': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        sorting.shellSort(arr);
        expect(arr).to.deep.equal([]);
      },
      'should sort the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        sorting.shellSort(arr);
        expect(arr).to.deep.equal([1,2,3,4,5,6,7,8]);
      }
    },
    '#knuthShuffle': {
      'should do nothing when empty arr is given': function() {
        var arr = [];
        sorting.knuthShuffle(arr);
        expect(arr).to.deep.equal([]);
      },
      'should shuffle the given arr as side effect': function() {
        var arr = [6,5,3,1,8,7,2,4];
        sorting.knuthShuffle(arr);
        expect(arr).to.have.length(8);
        expect(arr).to.include.members([1,2,3,4,5,6,7,8]);

      }
    }

    //
  }
};
