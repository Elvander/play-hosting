# --- !Ups

insert into Application (id, name, subscript, deploy_dir) values (1, 'Fireplug website', 'Commercial web site for the fireplug app.', 'TODO');
insert into Application (id, name, subscript, deploy_dir) values (2, 'TTV Vandakker', 'Web site for a Tug of War team.', 'TODO');
insert into Application (id, name, subscript, deploy_dir) values (3, 'TTV Powerrangers', 'Web site for a Tug of War team.', 'TODO');


# --- !Downs

delete from Application;