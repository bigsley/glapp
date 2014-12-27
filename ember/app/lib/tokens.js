import Ember from 'ember';
import Vector from './vector';

var Token = Ember.Object.extend({
  // init
  // draw
});

var DrawToken = Token.extend({
  init: function (stateManager) {
    this.stateManager = stateManager;
  },

  draw: function () {
    this.stateManager.draw();
  }
});

var MoveToken = DrawToken.extend({
  init: function (stateManager, direction) {
    this.stateManager = stateManager;
    this.direction = direction;
  },

  draw: function () {
    this.stateManager.direction = this.direction;
    this._super();
  }
});

var ContextToken = Token.extend({
  execute: function (context, children) {
    context.push(this);
    _.each(children, function (child) {
      child.draw(context);
    });
    context.pop();
  }
});

var RainbowToken = ContextToken.extend({
  init: function (stateManager) {
    this.stateManager = stateManager;
    this.initColor = stateManager.color;
  },

  beforeExecute: function () {
  },

  afterExecute: function () {
    stateManager.setColor(this.initColor);
  }
});

export { Token, ContextToken, DrawToken, MoveToken, RainbowToken };
