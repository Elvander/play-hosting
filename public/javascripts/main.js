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

utils.loadTemplate(['ApplicationListItemView','NewApplicationView'], function(){
	app = new AppRouter();
	Backbone.history.start();
})

function newProject() {
	
	$("#modal").html(new NewApplicationView({model: new Application()}).el);
	$("#modal").modal();
	
}