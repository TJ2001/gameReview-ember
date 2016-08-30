import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  released: DS.attr(),
  editorRating: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async:true})
});
