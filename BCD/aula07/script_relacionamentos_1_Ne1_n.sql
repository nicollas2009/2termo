-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Fornecedor (
ID_Fornecedor int auto encrement primary key PRIMARY KEY,
Razao_Social vashar (100) not null
)

CREATE TABLE Produto (
ID_Produto int auto encrement primary key PRIMARY KEY,
Nome_produto vashar (100) not null
)

CREATE TABLE Item_produto (
ID_Produto int 
ID_Fornecedor int 
quantidade int,
observacao tex(500),
ID_item int auto_increment Primary key PRIMARY KEY,
FOREIGN KEY(ID_Produto) REFERENCES Produto (ID_Produto)/*falha: chave estrangeira*/
)

