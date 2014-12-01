import {
  moduleForModel,
  test
} from 'ember-qunit';

import Vector from '../../../lib/vector';

module('Vector');

test('exists', function() {
  // var store = this.store();
  ok(!!Vector);
});

test('can be instantiated', function () {
  var vector = new Vector(1, 2);
  ok(vector.x == 1);
  ok(vector.y == 2);
});

test('scale works', function () {
  var vector = new Vector(1, 2);
  var scaledVector = vector.scale(2);
  ok(scaledVector.x == 2);
  ok(scaledVector.y == 4);
});

test('length works', function () {
  var vector = new Vector(2, 0);
  ok(vector.length() == 2);
});

test('unit works', function () {
  var vector = new Vector(2, 0);
  var unitVector = vector.unit();
  ok(unitVector.x == 1);
  ok(unitVector.y == 0);
});

test('setLength works', function () {
  var vector = new Vector(2, 0);
  var setLengthVector = vector.setLength(5);
  ok(setLengthVector.x == 5);
  ok(setLengthVector.y == 0);
});

test('add works', function () {
  var vec1 = new Vector(1, 2);
  var vec2 = new Vector(3, 4);
  var sum = Vector.add(vec1, vec2);
  ok(sum.x == 4);
  ok(sum.y == 6);
});

test('origin exists', function () {
  ok(Vector.origin.x == 0.0);
  ok(Vector.origin.y == 0.0);
});
