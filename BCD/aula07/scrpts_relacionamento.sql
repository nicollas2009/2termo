-- Active: 1788867938340@@127.0.0.1@3306@castello_relacionamentos
CREATE DATABASE CASTELLO_RELACIONAMENTOS;

USE CASTELLO_RELACIONAMENTOS;

CREATE TABLE PRODUTO(
    ID_PRODUTO INT AUTO_INCREMENT PRIMARY KEY,
    NOME_PRODUTO VARCHAR(100) NOT NULL
);

CREATE TABLE ESTOQUE (
    ID_ESTOQUE INT AUTO_INCREMENT PRIMARY KEY,
    ID_PRODUTO INT NOT NULL UNIQUE,
    QUANTIDEDE INT NOT NULL,
    FOREIGN KEY (ID_PRODUTO) REFERENCES PRODUTO(ID_PRODUTO)
);

CREATE TABLE CLIENTES (
    ID_CLIENTES INT AUTO_INCREMENT PRIMARY KEY,
    NOME_CLIENTE VARCHAR(60) NOT NULL
);

CREATE TABLE PEDIDOS (
    ID_PEDIDOS INT AUTO_INCREMENT PRIMARY KEY,
    DATA_PEDIDO DATETIME NOT NULL,
    ID_CLIENTES INT NOT NULL,
    FOREIGN KEY (ID_CLIENTES) REFERENCES CLIENTES (ID_CLIENTES)
);

CREATE TABLE FORNECEDOR_PRODUTO (
    ID_FORNECEDOR INT NOT NULL,
    ID_PRODUTO INT NOT NULL,
    PRIMARY KEY (ID_FORNECEDOR, ID_PRODUTO),
    FOREIGN KEY (ID_FORNECEDOR,) REFERENCES FORNECEDORES (ID_FORNECEDORES),
    FOREIGN KEY (ID_PRODUTO) REFERENCES PRODUTOS (ID_PRODUTO)
);

SELECT * FROM PRODUTOS;

-- 1. Uma categoria pode possuir vários produtos. Cada produto pertence a apenas
-- uma categoria.
categoria---pertence----produtos
1,n                        1,1
-- 2. Um funcionário pode registrar vários pedidos. Cada pedido é registrado por um
-- funcionário.
  funcionario----registrar----pedidos
   1,n                          1,1
--   3. Um fornecedor comercializa vários produtos, e o mesmo produto pode ser
-- comprado de vários fornecedores.
fornecedor----comercializa----produtos
1,n                             1,n

-- 4. Uma mesa pode existir sem nenhuma reserva futura. Uma reserva deve estar
-- vinculada a uma mesa.
mesa----sentar----reserva
0,n            1,n

-- 5. Um pedido possui vários itens. Um item de pedido pertence a um único pedido.
pedido----escolher----itens
1,n                1,1