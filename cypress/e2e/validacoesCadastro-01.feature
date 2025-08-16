#utf-8
#language: pt 

Funcionalidade: Validacao de cadastro
    Cenário: Validar que os dados cadastrados aparecem na tabela

    Dado que estou no site do demoqa
    E clico no botao add 
    E preencho os campos de cadastro com dados válidos
    E clico no botao de confirmacao 
    Entao o email cadastrado deve aparecer na tabela