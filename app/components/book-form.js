import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      // Perhaps it's a new thing but for components you need to this.get('property')
      // instead of referring to it directly...
      this.sendAction('action', this.get('book'));
    }
  }
});
