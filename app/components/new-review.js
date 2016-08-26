import Ember from 'ember';

export default Ember.Component.extend({
  newReview: false,
  actions: {
    newReviewShow(){
      this.set('newReview', true);
    },

    reviewQuestion(){
      var params = {
        username: this.get('username'),
        comment: this.get('comment'),
        rating: this.get('rating'),
        game: this.get('game')
      };
      this.set('newReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
