import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return { title: '', author: '', description: '' };
  },

  setupController: function(controller, model) {
    // Important! The book property is passed into the component as a property, 
    // so you have to set it here
    controller.set('book', model);
  },

  actions: {
    createBook: function(book) {
      var _this = this;
      this.store.createRecord('book', book).save().then(function() {
        console.log(book);
        _this.transitionTo('books.book', book);
      });
    }
  }
});
