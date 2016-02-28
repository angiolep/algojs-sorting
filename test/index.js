'use strict';

var _ = require('../index');
var expect = require('chai').expect;

// TODO execute a code coverage tool

describe('algojs-sorting', function () {
  describe('#compare()', function () {
    it('should compare Number types', function() {
      expect(_.compare(2, 5)).to.equal(-1);
      expect(_.compare(5, 5)).to.equal(0);
      expect(_.compare(5, 2)).to.equal(1);
    });
    it('should compare String types', function() {
      expect(_.compare('alfredo', 'paolo')).to.equal(-1);
      expect(_.compare('paolo', 'paolo')).to.equal(0);
      expect(_.compare('paolo', 'alfredo')).to.equal(1);
    });
    it('should compare Date types', function() {
      var d0 = new Date(2016, 2, 17, 0, 0, 0, 0);
      var d1 = new Date(2016, 2, 17, 0, 0, 0, 0);
      var d2 = new Date(2018, 5, 30);
      expect(_.compare(d1, d2)).to.equal(-1);
      expect(_.compare(d1, d0)).to.equal(0);
      expect(_.compare(d2, d1)).to.equal(1);
    });
    it('should throw exception when type not supported', function() {
      expect(_.compare.bind(_, {}, {})).to.throw('unsupported comparison');
    });
  });
  
  describe('#min()', function () {
    it('should return undefined when bad input', function () {
      expect(_.min()).to.be.undefined;
      expect(_.min(null)).to.be.undefined;
      expect(_.min('')).to.be.undefined;
      expect(_.min([])).to.be.undefined;
    });
    it('should select the min index ', function () {
      expect(_.min([9, 5, 12, 8, 15, 6, 20])).to.equal(1);
    });
    it('should select the min index applying the given comparator', function () {
      var arr = [{x: 0, y: 10}, {x: 3, y: 5}, {x: 8, y: 6}];
      var compare = function (a, b) {
        return a.y === b.y ? 0 : ( a.y > b.y ? 1 : -1);
      };
      var minIdx = _.min(arr, compare);
      expect(minIdx).to.equal(1);
    });
    it('should select the min index from the given start index', function () {
      var arr = [9, 5, 12, 8, 15, 6, 20];
      expect(_.min(arr, null, 2)).to.equal(5);
    });
  });

  
  describe('#swap()', function () {
    it('should throw error when bad input', function () {
      expect(_.swap.bind(_, undefined)).to.throw('bad input');
      expect(_.swap.bind(_, null)).to.throw('bad input');
      expect(_.swap.bind(_, {})).to.throw('bad input');
      expect(_.swap.bind(_, [0], 0, 5)).to.throw('bad input');
      expect(_.swap.bind(_, [], 3, 5)).to.throw('bad input');
    });
    it('should exchange elements in given array by given indices', function() {
      //         0  1  2   3  4   5  6
      var arr = [9, 5, 12, 8, 15, 6, 20];
      _.swap(arr, 2, 5);
      expect(arr[2]).to.equal(6);
      expect(arr[5]).to.equal(12);
    });
  });

  
  describe('#selectionSort()', function () {
    it('should do nothing when empty arr is given', function () {
      var arr = [];
      _.selectionSort(arr);
      expect(arr).to.deep.equal([]);
    });
    it('should do nothing when arr with single element is given', function () {
      var arr = [34];
      _.selectionSort(arr);
      expect(arr).to.deep.equal([34]);
    });
    it('should sort the given arr as side effect', function () {
      var arr = [6, 5, 3, 1, 8, 7, 2, 4];
      _.selectionSort(arr);
      expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('#insertionSort', function () {
    it('should do nothing when empty arr is given', function () {
      var arr = [];
      _.insertionSort(arr);
      expect(arr).to.deep.equal([]);
    });
    it('should do nothing when arr with single element is given', function () {
      var arr = [34];
      _.insertionSort(arr);
      expect(arr).to.deep.equal([34]);
    });
    it('should sort the given arr as side effect', function () {
      var arr = [6, 5, 3, 1, 8, 7, 2, 4];
      _.insertionSort(arr);
      expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('#shellSort', function () {
    it('should do nothing when empty arr is given', function () {
      var arr = [];
      _.shellSort(arr);
      expect(arr).to.deep.equal([]);
    });
    it('should sort the given arr as side effect', function () {
      var arr = [6, 5, 3, 1, 8, 7, 2, 4];
      _.shellSort(arr);
      expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
  
  describe('#knuthShuffle', function () {
    it('should do nothing when empty arr is given', function () {
      var arr = [];
      _.knuthShuffle(arr);
      expect(arr).to.deep.equal([]);
    });
    it('should shuffle the given arr as side effect', function () {
      var arr = [6, 5, 3, 1, 8, 7, 2, 4];
      _.knuthShuffle(arr);
      expect(arr).to.have.length(8);
      expect(arr).to.include.members([1, 2, 3, 4, 5, 6, 7, 8]);

    });
  });
});
  
