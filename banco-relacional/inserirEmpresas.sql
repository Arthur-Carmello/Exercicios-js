INSERT INTO EMPRESAS (nome, cnpj) VALUES ('Bradesco', 21331231312334), ('Vale', 98723273672324),  ('Cielo', 31231231231233);
ALTER TABLE EMPRESAS MODIFY CNPJ VARCHAR(14);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO EMPRESAS_UNIDADES (EMPRESA_ID, CIDADE_ID, SEDE) VALUES (1, 1, 1), (1, 2, 0), (2, 1, 0), (2, 2, 1);
