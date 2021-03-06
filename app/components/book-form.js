import Ember from 'ember';
import DS from 'ember-data';
import Validator from 'npm:validator';

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
      if (this.validate()) {
        // Perhaps it's a new thing but for components you need to this.get('property')
        // instead of referring to it directly e.g. this.book vs this.get('book')
        // this.get('book') refers to the property WITHIN this component that is called
        // 'book'. The component's 'book' property was passed in when we were using the 
        // book-form component in new.hbs

        // Also I think sendAction is passing the primary action up to the component
        // Follows standard bubbling practices component -> controller -> route (apparently from 
        // what I read in a discussion thread)
        this.sendAction('action', this.get('book'));  
      } 
    },

    validateTitle: function(value) {
      this.validateTitle(value);
    },

    validateAuthor: function(value) {
      this.validateAuthor(value);
    }
  },

  validate: function() {
    this.set('errors', DS.Errors.create());
    this.validateTitle(this.get('book.title'));
    this.validateAuthor(this.get('book.author'));

    if (Validator.isNull(this.get('book.description'))) {
      this.get('errors').add('description', 'cannot be empty');
    }

    // the isEmpty property is provided to us by DS.Errors
    return this.get('errors.isEmpty');
  },

  validateTitle: function(value) {
    this.get('errors').remove('title');
    if (Validator.isNull(value)) {
      this.get('errors').add('title', 'cannot be empty');
    }
  },

  validateAuthor: function(value) {
    this.get('errors').remove('author');
    if (Validator.isNull(value)) {
      this.get('errors').add('author', 'cannot be empty');
    }
  }
});
