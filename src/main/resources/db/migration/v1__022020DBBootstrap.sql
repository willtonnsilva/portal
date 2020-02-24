create table funcionario(
	id serial not null,
	matricula varchar(20) not null,
	nome varchar(255) not null,
	funcao varchar(255) not null,
	constraint funcionario_pkey primary key (matricula)
);