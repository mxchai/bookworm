import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      // Perhaps it's a new thing but for components you need to this.get('property')
      // instead of referring to it directly...

      // Also I think sendAction is passing the action up to the route that's containing 
      // the component. I might be wrong here
      this.sendAction('action', this.get('book'));
    }
  }
});
