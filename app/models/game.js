import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  released: DS.attr(),
  average: DS.attr(),
  image: DS.attr(),
});
