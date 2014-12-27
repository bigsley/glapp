import {
  moduleForModel,
  test
} from 'ember-qunit';

import { Vector2D, Vector } from '../../../lib/vector';

module('Vector2D');

test('exists', function() {
  // var store = this.store();
  ok(!!Vector2D);
});

test('can be instantiated', function () {
  var vector = new Vector2D(1, 2);
  ok(vector.x == 1);
  ok(vector.y == 2);
});

test('scale works', function () {
  var vector = new Vector2D(1, 2);
  var scaledVector2D = vector.scale(2);
  ok(scaledVector2D.x == 2);
  ok(scaledVector2D.y == 4);
});

test('length works', function () {
  var vector = new Vector2D(2, 0);
  ok(vector.length() == 2);
});

test('unit works', function () {
  var vector = new Vector2D(2, 0);
  var unitVector2D = vector.unit();
  ok(unitVector2D.x == 1);
  ok(unitVector2D.y == 0);
});

test('setLength works', function () {
  var vector = new Vector2D(2, 0);
  var setLengthVector2D = vector.setLength(5);
  ok(setLengthVector2D.x == 5);
  ok(setLengthVector2D.y == 0);
});

test('add works', function () {
  var vec1 = new Vector2D(1, 2);
  var vec2 = new Vector2D(3, 4);
  var sum = Vector.add(vec1, vec2);
  ok(sum.x == 4);
  ok(sum.y == 6);
});

test('origin exists', function () {
  ok(Vector2D.origin.x == 0.0);
  ok(Vector2D.origin.y == 0.0);
});
