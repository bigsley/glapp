import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('libraries');
  this.resource('library', { path: '/library/:library_id' });
  this.route('editor');
});

export default Router;
