import Ember from 'ember';
import { Vector2D, Vector } from './vector';
import Color from './color';
import { MoveToken } from './tokens';

var StateManager = Ember.Object.extend({
  init: function (processing, width, height) {
    this.processing = processing;
    this.direction = new Vector2D(0.0, 1.0);
    this.position = new Vector2D(width / 2.0, height / 2.0);
    this.color = new Color(0.0, 0.0, 0.0);
    this.weight = 1;
  },

  draw: function () {
    // set the stroke weight
    this.processing.strokeWeight(this.weight);

    // set the color
    var red = Math.floor(this.color.red * 256);
    var green = Math.floor(this.color.green * 256);
    var blue = Math.floor(this.color.blue * 256);
    this.processing.stroke(red, green, blue);

    // draw the line
    var endPosition = Vector.add(this.position, this.direction);

    this.processing.line(this.position.x, this.position.y, endPosition.x, endPosition.y);
    this.position = endPosition;
  },

  nameToToken: function (name) {
    var token;

    switch (name) {
      case "n":
        token = new MoveToken(this, new Vector2D(0.0, 20.0));
        break;
      case "s":
        token = new MoveToken(this, new Vector2D(0.0, -20.0));
        break;
      case "e":
        token = new MoveToken(this, new Vector2D(20.0, 0.0));
        break;
      case "w":
        token = new MoveToken(this, new Vector2D(-20.0, 0.0));
        break;
    }

    return token;
  },

  parse: function (codeString) {
    var names = codeString.split(";");

    var _this = this;
    var tokens = _.map(names, function (name) { return _this.nameToToken(name)});

    return tokens;
  },

  execute: function (tokens) {
    _.each(tokens, function (token) {
      token.draw();
    });
  }
});

export default StateManager;
