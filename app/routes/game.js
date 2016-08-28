import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveReview(params){
      var newReview = this.store.createRecord('review', params);
      var game = params.game;
      game.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return game.save();
      });
      this.transitionTo('game', params.game);
    },
    deleteReview(review) {
      // console.log("destroyed");
      review.destroyRecord();
    }
  }
});
