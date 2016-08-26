import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('game', params.rental_id);
  },

  actions: {
    saveGame2(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('index');
    }
  }
});
