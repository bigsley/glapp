import {
  moduleForModel,
  test
} from 'ember-qunit';

import { Vector } from '../../../lib/vector';
import { Path, CompositePath } from '../../../lib/path';
import { arraysEq } from '../../helpers/functions';

module('Path');

function arraysEq(arr1, arr2) {
  return _.difference(arr1, arr2).length == 0;
}


test('exists', function() {
  ok(!!Path);
  ok(!!CompositePath);
});

test('can be instantiated', function () {
  var vec1 = new Vector([1,2,3,4,5]);
  var vec2 = new Vector([3,4,5,6,7]);
  var path = new CompositePath([vec1, vec2]);
  ok(path.vectors.length == 2);
});

test('can get 0 val correctly -- 2 vecs', function () {
  var vec1 = new Vector([1,2,3,4,5]);
  var vec2 = new Vector([3,4,5,6,7]);
  var path = new CompositePath([vec1, vec2]);
  ok(arraysEq(path.val(0).vals, vec1.vals));
});

test('can get 1 val correctly -- 2 vecs', function () {
  var vec1 = new Vector([1,2,3,4,5]);
  var vec2 = new Vector([3,4,5,6,7]);
  var path = new CompositePath([vec1, vec2]);
  ok(arraysEq(path.val(1).vals, vec2.vals));
});

test('can get 0.5 val correctly -- 2 vecs', function () {
  var vec1 = new Vector([1,2,3,4,5]);
  var vec2 = new Vector([3,4,5,6,7]);
  var path = new CompositePath([vec1, vec2]);
  ok(arraysEq(path.val(0.5).vals, [2,3,4,5,6]));
});

test('can get multiple vals correct on multiple vecs', function () {
  var vecs = [new Vector([1,1,1]), new Vector([2,2,2]), new Vector([4,4,4])];
  var path = new CompositePath(vecs);
  ok(arraysEq(path.val(0).vals, vecs[0].vals));
  ok(arraysEq(path.val(0.25).vals, [1.5,1.5,1.5]));
  ok(arraysEq(path.val(0.5).vals, vecs[1].vals));
  ok(arraysEq(path.val(0.75).vals, [3,3,3]));
  ok(arraysEq(path.val(1).vals, vecs[2].vals));
});
