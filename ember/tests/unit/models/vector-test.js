import {
  moduleForModel,
  test
} from 'ember-qunit';

import { Vector } from '../../../lib/vector';
import { arraysEq } from '../../helpers/functions';

module('Vector');

test('exists', function() {
  // var store = this.store();
  ok(!!Vector);
});

test('can be instantiated', function () {
  var vector = new Vector([1,2,3,4,5]);
  ok(arraysEq(vector.vals, [1,2,3,4,5]));
});

test('scale works', function () {
  var vector = new Vector([1,2,3,4,5]);
  var scaledVector = vector.scale(2);
  ok(arraysEq(scaledVector.vals, [2,4,6,8,10]));
});

test('length works', function () {
  var vector = new Vector([0,0,3,4]);
  ok(vector.length() == 5);
});

test('unit works', function () {
  var vector = new Vector([0,0,0,3]);
  var unitVector = vector.unit();
  ok(arraysEq(unitVector.vals, [0,0,0,1]));
});

test('setLength works', function () {
  var vector = new Vector([0,0,3,0]);
  var setLengthVector = vector.setLength(5);
  ok(arraysEq(setLengthVector.vals, [0,0,5,0]));
});

test('add works', function () {
  var vec1 = new Vector([1,2,3]);
  var vec2 = new Vector([4,5,6]);
  var sum = Vector.add(vec1, vec2);
  ok(arraysEq(sum.vals, [5,7,9]));
});

test('subtract works', function () {
  var vec1 = new Vector([1,2,3]);
  var vec2 = new Vector([4,5,6]);
  var diff = Vector.subtract(vec2, vec1);
  ok(arraysEq(diff.vals, [3,3,3]));
});

test('interpolate works', function () {
  var vec1 = new Vector([1,2,3]);
  var vec2 = new Vector([4,5,6]);
  var interp1 = Vector.interpolate(vec1, vec2, 0);
  var interp2 = Vector.interpolate(vec1, vec2, 1);
  var interp3 = Vector.interpolate(vec1, vec2, 0.5);

  ok(arraysEq(interp1, vec1.vals));
  ok(arraysEq(interp2, vec2.vals));
  ok(arraysEq(interp3, [2.5, 3.5, 4.5]));
});

test('origin exists', function () {
  ok(arraysEq(Vector.origin(5).vals, [0,0,0,0,0]));
});
