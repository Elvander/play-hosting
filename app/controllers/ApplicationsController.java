package controllers;

import models.App;
import play.*;
import play.mvc.*;
import play.mvc.BodyParser.Json;

import views.html.*;

public class ApplicationsController extends Controller {

	@BodyParser.Of(Json.class)
	public static Result newApp() {
		return ok();
	}
	
	public static Result allApps() {
		return ok(play.libs.Json.toJson(App.find.all()));
	}
	
	public static Result getApp(Long id) {
		return ok(play.libs.Json.toJson(App.find.byId(id)));
	}
	
	public static Result updateApp(Long id) {
		return ok(play.libs.Json.toJson(App.find.byId(id)));
	}

}
