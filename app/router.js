import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.route('sign-up');
  this.route('profile', function() {
    this.route('edit');
  });
  this.route('forum', function() {
    this.route('topics',{path:'/:category_id'})
    this.route('add');
    this.route('edit',{path:'/edit/:forum_id'});
  });
  this.route('topic', function() {
    this.route('index',{path:'/:topic_id'})
    this.route('add',{path:'/add/:category_id'});
    this.route('edit');
  });

  this.route('post', function() {
    this.route('edit',{path:'/edit/:post_id'});
  });
  this.route('questionary', function() {
    this.route('add');
    this.route('edit',{path:'/edit/:questionary_id'});
    this.route('do',{path:'/:questionary_id'});
  });

  this.route('question', function() {
    this.route('add',{path: '/add/:questionary_id'});
  });
  this.route('dashboard', function() {
    this.route('user');
    this.route('category');
    this.route('forum');
  });

  this.route('user', function() {
    this.route('add');
    this.route('edit',{path:'/edit/:user_id'});
  });

  this.route('category', function() {
    this.route('add');
    this.route('edit',{path:'/edit/:category_id'});
  });
});

export default Router;
