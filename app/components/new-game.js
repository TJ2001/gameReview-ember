import Ember from 'ember';

export default Ember.Component.extend({
  newGame: false,
  actions: {
    newGameShow() {
      this.set('newGame', true);
    },

    submitGame() {
      var params = {
        name: this.get('name'),
        released: this.get('released'),
        image: this.get('image'),
        average: this.get('average')
      };
      this.set('newGame', false);
      this.sendAction('saveGame', params);
    }
  }
});
