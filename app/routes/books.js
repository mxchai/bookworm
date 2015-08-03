import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash(
    {
      books: this.store.findAll('book')
    });
  },

  setupController: function(controller, model) {
    controller.setProperties(model);
    // Why I think this sets books into the controller is that 'model' in this case
    // is just a reference to the model property above in the model hook i.e. it's returning a hash
    // So it's something like controller.setProperties({ books: [{}, {}] })
    // Therefore, the reference in controller is called books
    // Also if you do setup controller, the default behaviour which is
    // controller.set('model', model) doesn't execute
  },

  actions: {
    deleteBook: function(book) {
      var _this = this;
      book.destroyRecord().then(function() {
        _this.transitionTo('books');
      })
    }
  }
});
