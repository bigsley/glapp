import Ember from 'ember';
import { Vector } from './vector';

var Color = Vector.extend({
  init: function(red, green, blue) {
    if (green == 0 || green) {
      this.vals = [red, green, blue];
      this.red = red;
      this.green = green;
      this.blue = blue;
    } else {
      this.vals = red;
      this.red = red[0];
      this.green = red[1];
      this.blue = red[2];
    }
  },

  setStroke: function(processing) {
    processing.stroke(this.red * 255, this.green * 255, this.blue * 255);
  }
});

export default Color;
