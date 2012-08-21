package models;

import java.io.File;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import play.Play;
import play.db.ebean.Model;
import play.db.ebean.Model.Finder;

@Table(name="Application")
@Entity
public class App extends Model {

	@Id
	public Long id;
	
	public String name;
	
	public String subscript;
	
	public String deployDir;
	
	public static Finder<Long, App> find = new Finder<Long, App>(Long.class, App.class);
	
    public boolean isRunning() {
        File file = new File(getApplicationPath() + "/server.pid");
        return file.exists();
    }
	
    private String getApplicationPath() {
        String appsdir = "/home/bart/play-workspace/fireplug-repo/website/trunk"; //Play.application().configuration().getString("app.appsdirectory");
        return appsdir;
    }
	
}
