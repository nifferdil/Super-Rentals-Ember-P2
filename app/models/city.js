import DS from 'ember-data';

export default DS.Model.extend({
  attractions: DS.attr(),
  country: DS.attr(),
})
