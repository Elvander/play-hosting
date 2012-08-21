window.AppOverviewView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},
    
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
	
});

window.AppSettingsView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},
    
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
	
});

window.NewApplicationView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		"click .save" : "saveApp"
	},
	
	saveApp: function() {
		this.model.save(null, {
			success: function(model) {
				alert("Saved: " + model.id);
			},
			error: function() {
				alert("probleem")
			}
		});
	}
})