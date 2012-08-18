# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table Application (
  id                        bigint not null,
  name                      varchar(255),
  subscript                 varchar(255),
  deploy_dir                varchar(255),
  constraint pk_Application primary key (id))
;

create sequence Application_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists Application;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists Application_seq;

