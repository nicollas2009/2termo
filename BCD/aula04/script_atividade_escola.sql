-- comandos para criar banco de dados--
create database escola_NICOLLAS;

create database escola_nicollas2;

-- comandos para apagar banco de dados --
drop database escola_nicollas2;

-- comando para ativar banco --
USE escola_NICOLLAS;

-- MOSTRAS TABELA BANCO DE DADOS --
SHOW TABLES;

-- COMANDO PARA CRIAR TABELAS --
CREATE TABLE PRODUTOS (
ID_produtos int auto_increment primary key,
nome_do_produto varchar(63) not null,
quantidade float,
preco float,
peso float
);

create table pedido (
ID_pedido int auto_increment primary key,
nome_do_pedido varchar(78), 
preco float,
endereco varchar(78)
);


