create database blog_db;

create table users (
id serial primary key,
firstname varchar (100),
lastname varchar (100),
email varchar (100)
);

insert into users (firstname, lastname, email) values
('Eduardo','Alvarez','redreaq@gmail.com'),
('Maria', 'Palacios', 'mpalacios@gmail.com'),
('Petronila', 'Sinforosa', 'petrosinforosa@gmail.com');

create table posts (
id serial primary key,
creator_id int,
title varchar (100),
text text,
foreign key (creator_id) references users(id)
);

insert into posts (creator_id, title, text) values
(1, 'Aviacion Comercial', 'Le gustan los aviones comerciales de ultima generacion.'),
(2, 'Psicologia Infantil', 'Adora trabajar con niños.'),
(1, 'Pasteleria Amateur', 'Le gusta repetir recetas d
e tortas de chocolate.'),
(3, 'Mal Genio', 'Siempre anda malhumorada por la vida'),
(2, 'Asombro por los Viajes', 'Le encanta viajar asi sea dando un simple paseo.');

create table likes (
id serial primary key,
user_id int,
post_id int,
foreign key (user_id) references users(id),
foreign key (post_id) references posts(id)
);

insert into likes (user_id, post_id) values
(1, 2),
(2, 1),
(3, 3),
(1, 4),
(2, 5);

SELECT posts.*, users.firstname, users.lastname, users.email
FROM posts
INNER JOIN users ON posts.creator_id = users.id;

SELECT posts.*, users.firstname, users.lastname, users.email
from posts
inner join likes on posts.id = likes.post_id
inner join users on likes.user_id = users.id;



