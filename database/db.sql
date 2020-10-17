CREATE DATABASE departameno;


--Drops de tablas
DROP TABLE IF EXISTS orientadores CASCADE;
DROP TABLE IF EXISTS personas CASCADE;
DROP TABLE IF EXISTS carreras CASCADE;
DROP TABLE IF EXISTS personas_carreras CASCADE;
DROP TABLE IF EXISTS tipos_documentos CASCADE;
DROP TABLE IF EXISTS categorias CASCADE;
DROP TABLE IF EXISTS sectorderivaciones CASCADE;
DROP TABLE IF EXISTS derivadores CASCADE;
DROP TABLE IF EXISTS estados CASCADE;
DROP TABLE IF EXISTS entrevistas CASCADE;
DROP TABLE IF EXISTS tipos_seguimientos CASCADE;
DROP TABLE IF EXISTS seguimientos CASCADE;

truncate table orientadores RESTART identity CASCADE;
truncate table personas RESTART identity CASCADE;
truncate table carreras RESTART identity cascade;
truncate table personas_carreras RESTART identity CASCADE;
truncate table tipos_documentos RESTART identity CASCADE;
truncate table categorias RESTART identity CASCADE;
truncate table sectorderivaciones RESTART identity CASCADE;
truncate table derivadores RESTART identity CASCADE;
truncate table estados RESTART identity CASCADE;
truncate table entrevistas RESTART identity CASCADE;
truncate table tipos_seguimientos RESTART identity CASCADE;
truncate table seguimientos RESTART identity CASCADE;

--Creacion de tablas
CREATE TABLE personas(
   persona_id INT GENERATED ALWAYS AS IDENTITY,
   carrera_id INT,
   persona_documento INT NOT NULL,
   documento_id INT NOT NULL,
   persona_nombre VARCHAR(255) NOT NULL,
   persona_celular VARCHAR(20) NOT NULL,
   persona_tel_particular VARCHAR(20) NOT NULL,
   persona_email VARCHAR(255) NOT NULL,
   PRIMARY KEY(persona_id)
);

CREATE TABLE tipos_documentos(
   documento_id INT GENERATED ALWAYS AS IDENTITY,
   documento_tipo VARCHAR(255) NOT NULL,
   PRIMARY KEY(documento_id)
);


CREATE TABLE carreras(
   carrera_id INT GENERATED ALWAYS AS IDENTITY,
   carrera_nombre VARCHAR(255) NOT NULL,
   carrera_departamento VARCHAR(255) NOT NULL,
   carrera_director VARCHAR(255) NOT NULL,
   PRIMARY KEY(carrera_id)
);

CREATE TABLE personas_carreras(
   persona_carrera_id INT GENERATED ALWAYS AS IDENTITY,
   persona_id INT not null,
   carrera_id INT not null
);

CREATE TABLE categorias(
   categoria_id INT GENERATED ALWAYS AS IDENTITY,
   categoria_tipo VARCHAR(255) NOT null unique,
   PRIMARY KEY(categoria_id)
);

CREATE TABLE orientadores(
   orientador_id INT GENERATED ALWAYS AS IDENTITY,
   orientador_nombre VARCHAR(255) NOT null,
   orientador_email VARCHAR(100) NOT null unique,
   orientador_password VARCHAR(255) NOT null,
   PRIMARY KEY(orientador_id)
);

CREATE TABLE sectorderivaciones(
   sector_id INT GENERATED ALWAYS AS IDENTITY,
   sector_nombre VARCHAR(255) NOT null UNIQUE,
   PRIMARY KEY(sector_id)
);

CREATE TABLE derivadores(
   derivador_id INT GENERATED ALWAYS AS IDENTITY,
   sector_id INT NOT null,
   derivador_nombre VARCHAR(255) NOT null UNIQUE,
   PRIMARY KEY(derivador_id)
);

CREATE TABLE estados(
   estado_id INT GENERATED ALWAYS AS IDENTITY,
   estado_tipo VARCHAR(255) NOT null,
   color VARCHAR(255) NOT null,
   PRIMARY KEY(estado_id)
);

CREATE TABLE entrevistas(
   entrevista_id INT GENERATED ALWAYS AS IDENTITY,
   seguimiento_id INT NOT null,
   entrevista_fecha_hora date,
   entrevista_observaciones VARCHAR(255) NOT null,
   entrevista_acciones VARCHAR(255) NOT null,
   PRIMARY KEY(entrevista_id)
);

CREATE TABLE tipos_seguimientos(
   tipo_seguimiento_id INT GENERATED ALWAYS AS IDENTITY,
   tipo_seguimiento_tipo VARCHAR(255) NOT null,
   PRIMARY KEY(tipo_seguimiento_id)
);

CREATE TABLE seguimientos(
   seguimiento_id INT GENERATED ALWAYS AS IDENTITY,
   estado_id INT NOT null,
   entrevista_id INT,
   categoria_id INT NOT null,
   tipo_seguimiento_id INT NOT null,
   persona_id INT NOT null,
   orientador_id INT NOT null,
   derivador_id INT NOT null,
   seguimiento_motivo VARCHAR(255) not null,
   PRIMARY KEY(seguimiento_id)
);


--Foreign Keys
alter table personas add foreign key(documento_id) references tipos_documentos(documento_id);
alter table personas_carreras add foreign key(persona_id) references personas(persona_id);
alter table personas_carreras add foreign key(carrera_id) references carreras(carrera_id);
alter table personas add foreign key(carrera_id) references carreras(carrera_id);
alter table derivadores add foreign key(sector_id) references sectorderivaciones(sector_id);
alter table entrevistas add foreign key(seguimiento_id) references seguimientos(seguimiento_id);
alter table seguimientos add foreign key(estado_id) references estados(estado_id);
alter table seguimientos add foreign key(estado_id) references estados(estado_id);
--alter table seguimientos add foreign key(entrevista_id) references entrevistas(entrevista_id); SOLO si es muchos
alter table seguimientos add foreign key(categoria_id) references categorias(categoria_id);
alter table seguimientos add foreign key(tipo_seguimiento_id) references tipos_seguimientos(tipo_seguimiento_id);
alter table seguimientos add foreign key(persona_id) references personas(persona_id);
alter table seguimientos add foreign key(orientador_id) references orientadores(orientador_id);
alter table seguimientos add foreign key(derivador_id) references derivadores(derivador_id);

--======================================
--Data Insertion
--======================================
--Tabla Estados
INSERT INTO estados (estado_tipo, color) VALUES ('Ausente','rgba(242, 153, 74, 0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Citado', 'rgba(86,204,242,0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Contactar','rgba(242,201,76,0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('En proceso','rgba(39, 174, 96, 0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Espera de Respuesta', 'rgba(235,87,87,0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Realizado','rgba(47, 128, 237, 0.7)');
INSERT INTO estados (estado_tipo, color) VALUES ('Sin Estado','rgba(189,189,189,0.7)');

--Tabla tipo_documentos
INSERT INTO tipos_documentos (documento_tipo) VALUES ('DNI');
INSERT INTO tipos_documentos (documento_tipo) VALUES ('Pasaporte');


--Tabla SectorDerivaciones
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Demanda espontanea');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Gestion estudiantil');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Docente');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('CPU');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Inst. Educacion');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Inst. Salud');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Inst. Biotecnologia');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Inst. Ingenieria');
INSERT INTO sectorderivaciones (sector_nombre) VALUES ('Otros Sectores');

--Tabla de Derivadores
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (1, 'Jose Perez');
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (1, 'Juan Tapia');
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (1, 'Ana Rodriguez');
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (3, 'Adrian Arnedo');
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (4, 'Marisa LeBron');
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (5, 'Julieta Telas');
INSERT INTO derivadores (sector_id, derivador_nombre) VALUES (5, 'Nicolas Lopez');

--Tabla Tipos de Siguimientos
INSERT INTO tipos_seguimientos (tipo_seguimiento_tipo) VALUES ('Entrevista');
INSERT INTO tipos_seguimientos (tipo_seguimiento_tipo) VALUES ('Contacto Por email-Telefono');
INSERT INTO tipos_seguimientos (tipo_seguimiento_tipo) VALUES ('Entrevista con docentes');

--Tabla Categorias
INSERT INTO categorias (categoria_tipo) VALUES ('Discapacidad');
INSERT INTO categorias (categoria_tipo) VALUES ('Salud Mental');
INSERT INTO categorias (categoria_tipo) VALUES ('Salud Fisica');
INSERT INTO categorias (categoria_tipo) VALUES ('Tecnologia');
INSERT INTO categorias (categoria_tipo) VALUES ('Pedagogia');
INSERT INTO categorias (categoria_tipo) VALUES ('Re-Orientacion Vocacional');

--Tabla Orientadores
INSERT INTO orientadores (orientador_nombre, orientador_email, orientador_password) VALUES ('Victoria Said', 'Victoria@unahur.edu.ar', '1234');
INSERT INTO orientadores (orientador_nombre, orientador_email, orientador_password) VALUES ('Emmanuel Pacheco', 'Emmanuel@unahur.edu.ar', '1234');
INSERT INTO orientadores (orientador_nombre, orientador_email, orientador_password) VALUES ('Jesica Carro', 'Jesica@unahur.edu.ar', '1234');
INSERT INTO orientadores (orientador_nombre, orientador_email, orientador_password) VALUES ('Noelia Gomez', 'Noelia@unahur.edu.ar', '1234');
INSERT INTO orientadores (orientador_nombre, orientador_email, orientador_password) VALUES ('Marcela Vidondo', 'Marcela@unahur.edu.ar', '1234');
INSERT INTO orientadores (orientador_nombre, orientador_email, orientador_password) VALUES ('Ana Bond', 'Ana@unahur.edu.ar', '1234');

--Tabla de Carreras
INSERT INTO carreras (carrera_nombre, carrera_departamento, carrera_director) VALUES ('Tecnicatura en Informatica', 'Instituto Tecnologia', 'Fernando Puricelli');
INSERT INTO carreras (carrera_nombre, carrera_departamento, carrera_director) VALUES ('Biotecnologia', 'Instituto de Biotecnologia', 'Jose Reclara');
INSERT INTO carreras (carrera_nombre, carrera_departamento, carrera_director) VALUES ('Licenciatura en Informatica', 'Instituto Tecnologia', 'Fernando Puricelli');
INSERT INTO carreras (carrera_nombre, carrera_departamento, carrera_director) VALUES ('Educacion Fisca', 'Instituto de Educacion', 'Alfredo Seres');

--Tabla de Personas
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (1, 12345678, 1, 'Ricardo Enrique Bochini', '15-2345-4321', '4665-3243', 'elbocha@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (2, 34098765, 1, 'Marangoni', '15-2345-4321', '4665-3243', 'maranga@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (3, 87230176, 2, 'Silvio Romero', '15-2345-4321', '4665-3243', 'Silvio@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (4, 12345678, 1, 'Ezequiel Barco', '15-2345-4321', '4665-3243', 'eze@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (3, 12345678, 1, 'Martin Benitez', '15-2345-4321', '4665-3243', 'tincho@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (4, 12345678, 1, 'Jorge Burruchaga', '15-2345-4321', '4665-3243', 'burru@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (2, 12345678, 2, 'Emanuel Gigliotti', '15-2345-4321', '4665-3243', 'elpuma@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (2, 12345678, 1, 'Maximiliano Meza', '15-2345-4321', '4665-3243', 'maxi@independiente.com');
INSERT INTO personas (carrera_id, persona_documento, documento_id, persona_nombre, persona_celular, persona_tel_particular, persona_email) 
	VALUES (3, 12345678, 1, 'Nicolas Tagliafico', '15-2345-4321', '4665-3243', 'nico@independiente.com');
	
--Tabla Personas y Carreras
INSERT INTO personas_carreras (persona_id, carrera_id) VALUES (1, 1);
INSERT INTO personas_carreras (persona_id, carrera_id) VALUES (2, 2);
INSERT INTO personas_carreras (persona_id, carrera_id) VALUES (1, 2);
INSERT INTO personas_carreras (persona_id, carrera_id) VALUES (3, 4);
INSERT INTO personas_carreras (persona_id, carrera_id) VALUES (4, 1);

--Tabla de Seguimientos
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (1, 3, 1, 1, 1, 1, 3, 'Esta preocupado porque no consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (2, 1, 2, 1, 1, 1, 1, 'No consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (3, 2, 3, 1, 2, 2, 1, 'No consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (4, 4, 4, 1, 2, 2, 2, 'No consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (5, 7, 5, 1, 2, 3, 4, 'No consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (6, 1, 6, 1, 3, 4, 4, 'No consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (7, 1, 3, 1, 3, 3, 4, 'No consigue computadora para estudiar');
INSERT INTO seguimientos (estado_id, entrevista_id, categoria_id, tipo_seguimiento_id, persona_id, orientador_id, derivador_id, seguimiento_motivo) 
	VALUES (2, 1, 1, 1, 3, 4, 4, 'No consigue computadora para estudiar');

--Tabla de Entrevistas
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (1, '2020-09-20', 'Estuvo atento a lo que se le dijo', 'Va a prestar atencion para la proxima clase');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (1, '2020-09-21 10:20:00', 'xxxxxxxxx', 'yyyyyyyyy');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (1, '2020-09-22 12:20:00', 'xxxxxxxxx', 'yyyyyyyyy');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (2, '2020-09-23 16:20:00', 'xxxxxxxxx', 'yyyyyyyyy');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (2, '2020-09-23 14:20:00', 'xxxxxxxxx', 'yyyyyyyyy');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (3, '2020-09-23 09:20:00', 'xxxxxxxxx', 'yyyyyyyyy');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (4, '2020-09-24 12:20:00', 'xxxxxxxxx', 'yyyyyyyyy');
INSERT INTO entrevistas (seguimiento_id, entrevista_fecha_hora, entrevista_observaciones, entrevista_acciones) 
	VALUES (5, '2020-09-25 11:20:00', 'xxxxxxxxx', 'yyyyyyyyy');