import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    addToFavorite(item) {
      debugger;
      this.get('favoriteList').add(item);
    }
  }
});
