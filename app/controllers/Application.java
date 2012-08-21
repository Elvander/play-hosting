package controllers;

import models.App;
import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {
  
  public static Result index() {
    return ok(index.render());
  }
  
  public static Result application(Long id) {
	  App app = App.find.byId(id);
	  return ok(application.render(app));
  }
  
}