import Ember from 'ember';
import DS from 'ember-data';
import serverErrorsParser from '../../utils/server-errors-parser';

export default Ember.Route.extend({
  model: function() {
    // return { title: '', author: '', description: '' };
    return this.store.createRecord('book');
  },

  setupController: function(controller, model) {
    // Important! The book property is passed into the component as a property, 
    // so you have to set it here
    controller.set('book', model);
    controller.set('errors', DS.Errors.create());
  },

  actions: {
    createBook: function(book) {
      var _this = this;
      var errors = _this.controllerFor('books.new').get('errors');

      book.save().then(function(book) {
        _this.transitionTo('books.book', book);
      }).catch(function(res) {
        // Basically catch is triggered when server responds with 400
        serverErrorsParser(res, errors);
      });

      // Legacy code
      // this.store.createRecord('book', book).save().then(function(book) {
      //   // book is a variable for the response from the server
      //   // which in this case, is really a book
      //   // check server/mocks/books.js POST request response for details
      //   _this.transitionTo('books.book', book);
      // });
    },
  }
});
