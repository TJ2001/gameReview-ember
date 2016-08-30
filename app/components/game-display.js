import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['editorRating:desc'],
  sortedGames: Ember.computed.sort('model', 'sortBy'),

  favoriteList: Ember.inject.service(),

  actions: {
    addToFavorites(item) {
      console.log(item);
      this.get('favoriteList').add(item);
    }
  }
});
