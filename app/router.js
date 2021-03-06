import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books', function(){
    // e.g. books/3
    this.route('book', { path: ':book_id' });
    this.route('new');
    this.route('edit', { path: ':book_id/edit' });
  });
});

export default Router;
