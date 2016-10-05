Template.SingleRecipe.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleRecipe', id);
  });
});

Template.SingleRecipe.helpers({
  recipe: ()=>{
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
