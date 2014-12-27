import Ember from 'ember';
import StateManager from '../lib/state_manager';

export default Ember.Controller.extend({
  draw: null,

  redraw: function () {
    var _this = this;

    this.set('draw', function (processing) {
      processing.setup = function() {
        processing.size(500, 500, processing.P3D);
        processing.stroke(processing.color(44,48,32));
      }

      processing.draw = function () {
        var stateManager = new StateManager(processing, 500, 500);
        var tokens = stateManager.parse(_this.get('codeString'));
        stateManager.execute(tokens);
      }
    });
  },

  codeString: null
});
