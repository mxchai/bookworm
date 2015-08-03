import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // return this.store.findAll('book', params.book_id); // the book_id is coming from router.js (as in the dynamic segment)
    return this.store.findRecord('book', params.book_id);
  },

  setupController: function(controller, model) {
    controller.set('book', model);
  },
});
