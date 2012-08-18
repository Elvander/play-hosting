package models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
	
	
}
