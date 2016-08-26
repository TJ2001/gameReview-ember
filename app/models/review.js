import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr(),
  game: DS.belongsTo('game', {async:true})
});
