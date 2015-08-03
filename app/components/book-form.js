import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: function() {
    // This is an interesting pattern
    // this.get('book') returns the book property that was passed into this component
    // upon instantiation. If the id exists, it means the book exists, and hence
    // you should be calling update. Wow!
    return (this.get('book').id) ? 'Update Book' : 'Add Book';
  }.property(),
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
