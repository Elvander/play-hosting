var AppRouter = Backbone.Router.extend({
	
	routes: {
		""			: "list"
	},

	list: function() {
		var appList = new ApplicationCollection();
		appList.fetch({success: function() {
			$("#applicationoverview").html(new ApplicationListView({model: appList}).el);
		}})
	}
	
})

utils.loadTemplate(['ApplicationListItemView'], function(){
	app = new AppRouter();
	Backbone.history.start();
})