import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('book', params.book_id);
  },

  // Can't decide if I want to use ES6 syntax for methods of ES5...
  setupController: function(controller, model) {
    controller.set('book', model);
  },

  actions: {
    updateBook(book) {
      var _this = this;
      book.save().then(function(book) {
        _this.transitionTo('books.book', book);
      });
    }
  }
});
