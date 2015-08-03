import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return { title: '', author: '', description: '' };
    return this.store.createRecord('book');
  },

  setupController: function(controller, model) {
    // Important! The book property is passed into the component as a property, 
    // so you have to set it here
    controller.set('book', model);
  },
});
