import Ember from 'ember';

import { Vector } from './vector';

var Path = Ember.Object.extend({
});

var CompositePath = Path.extend({
  init: function (vectors) {
    this.vectors = vectors;
    this.distanceBetweenVectors = 1.0 / (vectors.length - 1);
  },

  val: function (epsilon) {
    // handle edge case, where epsilon is 1
    if (epsilon == 1) {
      return this.vectors[this.vectors.length - 1];
    }

    // must be between 0 and # of vectors - 2, inclusive
    var lowerIndex = Math.floor(epsilon / this.distanceBetweenVectors);
    var upperIndex = lowerIndex + 1;

    // get the vectors
    var vec1 = this.vectors[lowerIndex];
    var vec2 = this.vectors[upperIndex];

    // find the interpolation epsilon between those vectors (usually not
    // equal to epsilon)
    var interpolationEpsilon = (epsilon - (lowerIndex * this.distanceBetweenVectors)) * (this.vectors.length - 1);

    // return the interpolation
    return Vector.interpolate(vec1, vec2, interpolationEpsilon);
  }
});

export { Path, CompositePath };
