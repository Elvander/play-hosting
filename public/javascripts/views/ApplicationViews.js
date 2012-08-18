window.ApplicationListView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		var apps = this.model.models;
		var len = apps.length;

		$(this.el).html('<div id="appWrapper"></div>');
		
		for (var i = 0; i < len; i++) {
            $('#appWrapper', this.el).append(new ApplicationListItemView({model: apps[i]}).render().el);
        }
		
		return this;
	}


	
})

window.ApplicationListItemView = Backbone.View.extend({
	
	initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
	
});