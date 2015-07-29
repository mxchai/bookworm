import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return { title: 'fat cow', author: '', description: '' };
  },

  setupController: function(controller, model) {
    controller.set('book', model);
  }
});
