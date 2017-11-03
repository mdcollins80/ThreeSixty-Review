import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('reviews');
  this.route('review', { path: '/reviews/:review_id' });
  this.route('review-new', { path: '/reviews/new' });
});

export default Router;