Gabriel Isai Soliz Choque            RA: 24.124.034-0

# Loja de Roupa

## Visão Geral

Este projeto consiste em um aplicativo de loja de roupas desenvolvido com React Native e Firebase.

O aplicativo possui autenticação de usuários, diferenciação entre administrador e cliente, sistema de estoque, carrinho de compras e armazenamento em banco de dados na nuvem.

O objetivo do projeto foi desenvolver uma aplicação completa utilizando navegação, CRUD com Firebase e interação com o usuário.

# Objetivos

* Desenvolver um aplicativo funcional.
* Utilizar Firebase como banco de dados.
* Implementar autenticação de usuários.
* Criar sistema de estoque.
* Implementar carrinho de compras.
* Utilizar navegação entre telas.
* Aplicar imagens e atuadores no aplicativo.

# Tecnologias Utilizadas

* React Native
* Expo
* Firebase Authentication
* Firebase Realtime Database
* React Navigation
* Expo Vector Icons

# Funcionalidades

## Área do Cliente
### Cadastro de Usuário
O usuário pode criar uma conta utilizando e-mail e senha. Após o cadastro, os dados do usuário são armazenados no Firebase.

### Login
O login é realizado utilizando Firebase Authentication. Após autenticar o usuário, o aplicativo identifica automaticamente se o usuário é administrador ou cliente e redireciona para a área correta do sistema.

### Loja
A tela Loja exibe os produtos cadastrados pelo administrador no banco de dados.
O cliente pode visualizar:
- modelo da roupa
- cor
- tamanho
- preço
- quantidade disponível
Também é possível adicionar produtos ao carrinho de compras.

### Carrinho
A tela Carrinho exibe os produtos adicionados pelo usuário autenticado.
Cada carrinho fica vinculado ao usuário logado no sistema.
Ao finalizar a compra:
- os produtos são removidos do carrinho
- o estoque é atualizado automaticamente
- o aplicativo utiliza vibração para fornecer feedback ao usuário
- 
### Perfil
A tela Perfil permite realizar logout da conta autenticada.

### Área do Administrador

## Adicionar Produtos
O administrador pode cadastrar novas roupas no estoque informando:
- modelo
- cor
- tamanho
- preço
- quantidade
Os dados são armazenados no Firebase Realtime Database.

### Estoque
A tela Estoque exibe todos os produtos cadastrados no banco de dados em tempo real.

### Excluir Produtos
O administrador pode remover quantidades específicas dos produtos do estoque.
Caso a quantidade chegue a zero, o produto é removido automaticamente do banco de dados.

# Banco de Dados (CRUD)

O aplicativo utiliza Firebase Realtime Database.

## Funcionalidades CRUD implementadas:

### CREATE
* Cadastro de produtos
* Cadastro de usuários

### READ
* Leitura do estoque
* Leitura do carrinho

### UPDATE
* Atualização automática da quantidade dos produtos

### DELETE
* Exclusão de produtos
* Limpeza do carrinho após finalizar compra

# Navegação
O aplicativo utiliza React Navigation com:
* Stack Navigation
* Bottom Tab Navigation

# Sensor / Atuador
Foi utilizada vibração do celular para fornecer feedback ao usuário durante ações importantes:
* Login
* Cadastro
* Adição de produtos
* Finalização da compra

# Imagens
O aplicativo utiliza a logo da loja nas telas de Login e Cadastro.

# Demonstração

## Telas do aplicativo
* Login
* Cadastro
* Loja
* Carrinho
* Perfil
* Estoque
* Adicionar Produto
* Excluir Produto

# Aprendizados
Durante o desenvolvimento do projeto foram praticados conceitos importantes como:
* Navegação entre telas
* Integração com Firebase
* CRUD completo
* Manipulação de estado
* Autenticação de usuários
* Estruturação de projeto React Native
* Uso de banco de dados em nuvem

# Próximos Passos
Possíveis melhorias futuras:
* Melhorar o design da interface
* Adicionar imagens para os produtos
* Implementar favoritos
* Adicionar total da compra
* Melhorar filtros de pesquisa
