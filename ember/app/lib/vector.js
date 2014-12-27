import Ember from 'ember';

var Vector = Ember.Object.extend({
  init: function (vals) {
    this.vals = vals;
    return this;
  },

  scale: function (scalar) {
    var newVals = _.map(this.vals, function (val) { return val * scalar });

    // need to use this.constructor in case there are subclasses
    return new this.constructor(newVals);
  }, 

  length: function () {
    var squares = _.map(this.vals, function (val) { return val * val });

    var sum = _.reduce(squares, function (accum, val) { return accum + val }, 0);

    return Math.sqrt(sum);
  }, 

  unit: function () {
    var len = this.length();
    var newVals = _.map(this.vals, function (val) { return val / len });

    return new this.constructor(newVals);
  },

  setLength: function (length) {
    return this.unit().scale(length);
  }
});

Vector.add = function (vec1, vec2) {
  var newVals = _.map(vec1.vals, function (val, index) {
    return val + vec2.vals[index];
  });

  return new vec1.constructor(newVals);
}

Vector.subtract = function (vec1, vec2) {
  var negVec2 = vec2.scale(-1);
  return Vector.add(vec1, negVec2);
}

Vector.origin = function (dimensions) {
  var vals = []
  _.times(dimensions, function () {vals.push(0)});
  return new Vector(vals);
}

// interpolates between vec1 and vec2 by epsilon
// Vector.interpolate(vec1, vec2, 0) -> vec1
// Vector.interpolate(vec1, vec2, 1) -> vec2
Vector.interpolate = function (vec1, vec2, epsilon) {
  var diff = Vector.subtract(vec2, vec1);
  var scaledDiff = diff.scale(epsilon);
  return Vector.add(vec1, scaledDiff);
}

var Vector2D = Vector.extend({
  init: function (x, y) {
    if (y == 0 || y) {
      this.vals = [x, y];
      this.x = x;
      this.y = y;
    } else {
      this.vals = x;
      this.x = x[0];
      this.y = x[1];
    }

    return this;
  }
});

Vector2D.origin = new Vector2D(0.0, 0.0);

export { Vector, Vector2D };
