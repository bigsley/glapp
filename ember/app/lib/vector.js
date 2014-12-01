import Ember from 'ember';

var Vector = Ember.Object.extend({
  init: function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  },

  scale: function (scalar) {
    return new Vector(this.x * scalar, this.y * scalar); 
  },

  length: function () {
    var x = this.x;
    var y = this.y;
    return Math.sqrt(x * x + y * y);
  },

  unit: function () {
    return new Vector(this.x / this.length(), this.y / this.length());
  },

  setLength: function (length) {
    return this.unit().scale(length);
  }
});

Vector.add = function (vec1, vec2) {
  return new Vector(vec1.x + vec2.x, vec1.y + vec2.y);
}

Vector.origin = new Vector(0.0, 0.0);

export default Vector;
