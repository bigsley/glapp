import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    var canvas = $('#editor-canvas')[0];
    var drawFunc = this.get('controller.draw');
    this.set('processing', new Processing(canvas, drawFunc));
  },

  processing: null,

  drawFuncDidChange: function () {
    // kill the old processing instance if there is one
    var processing = this.get('processing');
    if (processing) {
      processing.exit();
    }

    // create a new processing instance and store it
    var canvas = $('#editor-canvas')[0];
    if (canvas) {
      var drawFunc = this.get('controller.draw');
      this.set('processing', new Processing(canvas, drawFunc));
    }
  }.observes('controller.draw'),

  keyDown: function(e){
    if (e.keyCode == 13) {
      this.get('controller').redraw();
      e.preventDefault();
      e.stopPropagation();
    } 
  }
});
