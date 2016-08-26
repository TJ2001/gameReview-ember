import Ember from 'ember';

export function starRating(params) {
  var reviewRating = params[0].get('rating');

  if (reviewRating >= 5){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating >= 4){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating >= 3){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star">');
  } else if (reviewRating >= 2){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star">');
  } else if (reviewRating >= 1){
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}
export default Ember.Helper.helper(starRating);
