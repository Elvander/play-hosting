window.Application = Backbone.Model.extend({
	
	urlRoot: "api/applications",
	
	defaults: {
		id: null,
		name: "",
		subscript: "Play! Application",
		deployDir: ""
	}
	
})

window.ApplicationCollection =  Backbone.Collection.extend({
	
	model: Application,
	
	url: "api/applications"
	
})