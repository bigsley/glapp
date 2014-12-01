import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  position: DS.attr('number'),
  library: DS.belongsTo('library')
});
