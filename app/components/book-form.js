import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      // Perhaps it's a new thing but for components you need to this.get('property')
      // instead of referring to it directly...
      // this.get('book') refers to the property WITHIN this component that is called
      // 'book'. The component's 'book' property was passed in when we were using the 
      // book-form component in new.hbs

      // Also I think sendAction is passing the primary action up to the component
      // Follows standard bubbling practices component -> controller -> route (apparently from 
      // what I read in a discussion thread)
      this.sendAction('action', this.get('book'));
    }
  }
});
