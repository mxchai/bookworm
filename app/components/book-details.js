import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteBook: function() {
      // Sending the primary action with a params, in this case the book object
      // So it makes sense that on the route books side deleteBook takes in an argument
      this.sendAction('action', this.get('book'));
    }
  }
});
