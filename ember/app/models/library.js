import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  commands: DS.hasMany('command')
});
