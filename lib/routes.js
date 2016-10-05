Accounts.onLogin(function() {
  FlowRouter.go('/recipe-book');
});
Accounts.onLogout(function() {
  FlowRouter.go('home');
});


FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);
FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('/recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('homelayout');
  }
});
FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainlayout', {main:'Recipes'});
  }
});
FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainlayout', {main:'SingleRecipe'});
  }
});
FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainlayout', {main:'Menu'});
  }
});
FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainlayout', {main:'ShoppingList'});
  }
});
