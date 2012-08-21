var AppRouter = Backbone.Router.extend({
	
	routes: {
		"overview"			: "overview",
		"settings" : "settings"
	},

	initialize: function () {
		var self = this;
		this.application = new Application({id: 1})
		this.application.fetch({
			success: function() {
				self.overview();
			}
		});
	},
	
	overview: function() {
//		var appList = new ApplicationCollection();
//		appList.fetch({success: function() {
//			$("#applicationoverview").html(new ApplicationListView({model: appList}).el);
//		}})
		$("#content").html(new AppOverviewView({model: this.application}).el);
		setMenu("overview-menu");
	},
	
	settings: function() {
		$("#content").html(new AppSettingsView({model: this.application}).el);
		setMenu("settings-menu");
	},

})

utils.loadTemplate(['AppOverviewView','AppSettingsView'], function(){
	app = new AppRouter();
	Backbone.history.start();
})

function setMenu(menuItem) {
	$('.nav li').removeClass('active');
    if (menuItem) {
        $('.' + menuItem).addClass('active');
    }
}

function newProject() {
	
	$("#modal").html(new NewApplicationView({model: new Application()}).el);
	$("#modal").modal();
	
}