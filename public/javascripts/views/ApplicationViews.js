window.ApplicationListView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		var apps = this.model.models;
		var len = apps.length;

		for (var i = 0; i < len; i++) {
            $(this.el).append(new ApplicationListItemView({model: apps[i]}).render().el);
        }
		
		return this;
	}


	
})

window.ApplicationListItemView = Backbone.View.extend({
	
	initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    events: {
    	"click .details" : "openDetails"
    },
    
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    
    openDetails: function() {
    	window.location = "/application/" + this.model.id;
    }
	
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