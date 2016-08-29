import Ember from 'ember';

export function starRating(params) {
  var reviewRating = params[0].get('rating');
  var star = "<span class='glyphicon glyphicon-star'>";

  if (reviewRating >= 5){
      return Ember.String.htmlSafe(star + star + star + star + star);
  } else if (reviewRating >= 4){
      return Ember.String.htmlSafe(star + star + star + star);
  } else if (reviewRating >= 3){
      return Ember.String.htmlSafe(star + star + star);
  } else if (reviewRating >= 2){
      return Ember.String.htmlSafe(star + star);
  } else if (reviewRating >= 1){
      return Ember.String.htmlSafe(star);
  }
}

export default Ember.Helper.helper(starRating);
