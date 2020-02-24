create table funcionario(
    id SERIAL,
    matricula varchar(20) not null,
    nome varchar(255) not null,
    funcao varchar(255) not null,
    constraint funcionario_pkey primary key (matricula)
);

create table extrato(
    id SERIAL,
    data_operacao date not null,
    tipo_operacao varchar(150) not null,
    valor_operacao numeric not null default 0,
    constraint extrato_pkey primary key (id)
);
