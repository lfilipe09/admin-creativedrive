

- ✅ Typescript
- ✅ Testes unitários
- ✅ Mobile friendly
- ✅ Validação de formulário
- ✅ Deploy da aplicação
- ✅ Paginação
- ✅ Edição rápida
- ✅ Dashboards

## Techs

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Joi](https://joi.dev/api/?v=17.6.0)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Styled Media Query](https://github.com/morajabi/styled-media-query)
- [Styled Icons](https://styled-icons.dev/)

## Acessos

Acesse o `Deploy` da aplicação pelo link abaixo e veja o site funcionando ao vivo:
```bash
https://admin-creativedrive-iq57z4biw-lfilipe09.vercel.app/
```

Acesse o `Figma` da aplicação para conferir como o layout foi criado e o quão fiel a implementação pode seguir:
```bash
https://www.figma.com/file/Jki1qvJ1P5EXgERFR2Z0W6/Accenture-Song?node-id=0%3A1
```


## Getting Started

Primeiro, clone o repositório e instale as dependências com o comando `yarn`. Após isso, basta rodar:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu site e veja o resultado.

## Commands

- `dev`: roda a aplicação no `localhost:3000`
- `build`: cria a versão de build para produção
- `start`: inicia a aplicação com os arquivos buildados
- `lint`: roda o linter em todos os componentes e páginas
- `test`: roda o jest para testes em todos os componentes e páginas
- `test:watch`: roda o jest em modo watch
- `storybook`: inicia o storybook no `localhost:6006`
- `build-storybook`: cria a versão de build do storybook

## Responsividade

![ezgif com-gif-maker](https://user-images.githubusercontent.com/81202572/174573770-73d8cf0a-ce4e-4e0b-a806-2d0cc9aa0781.gif)
![Responsividade2](https://user-images.githubusercontent.com/81202572/174573817-6bec470d-3e19-44fb-9f17-c2483a4a707b.gif)
![Responsividade3](https://user-images.githubusercontent.com/81202572/174573826-80033620-79a2-4e4b-ad5a-60a0e2b2ef7a.gif)

- Experiência customizada para celular, contando com menu inferior e adaptação de todas as tabelas

# Validações de formulário

![Validação](https://user-images.githubusercontent.com/81202572/174574199-10ce65e4-3a61-490b-b8ca-f7927d333d5c.gif)

- Mensagens personalizadas em português
- Input Mask que completa a resposta do usuário. Ex: quando digita o cpf automaticamente insere os '.'
- Validação é feita assim que o usuário dá o submit o botão só habilita quando todos os campos estão preenchidos

- **Nome**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 3 dígitos
  
 - **Sobrenome**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 3 dígitos

 - **CPF**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 11 dígitos
  - Valida a formatação do CPF 000.000.000-00
 
  - **Email**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 5 dígitos
  - Precisa conter nessa ordem: string@string.string

  - **Senha**
  - Campo obrigatório
  - Valida a entrada para que tenha no mínimo 8 dígitos
  -  Precisa ter no mínimo: 8 dígitos, 1 maiúscula, 1 minúscula, 1 número, 1 caracter especial


# Busca
![Busca](https://user-images.githubusercontent.com/81202572/174575253-3f67d6cc-dced-4b66-afec-3997355b6b8b.gif)


# Autenticação
  - Validação através de token no Localstorage
  - A cada 1h o token é expirado e é necessário refazer o login
  - Proteção das rotas que exigem autenticação
  - O perfil Admin consegue editar e criar novos usuários, o usuário consegue apenas visualizar

# Edição Rápida

![EdicaoRapida](https://user-images.githubusercontent.com/81202572/174575749-2ea8ce8c-2245-4a10-86d4-03db857fcffe.gif)

# Confirmação para ações sensíveis (deletar usuário)
![ConfirmacaoAcaoSensivel](https://user-images.githubusercontent.com/81202572/174575829-249e6de6-96ea-4e40-a9e6-d2864fa5a8c8.gif)


# Paginação pelo método de offset
![Paginacao](https://user-images.githubusercontent.com/81202572/174575936-8fbb13ab-4478-48b2-98aa-8627071218bd.gif)


# Testes unitários
![Captura de tela 2022-06-20 062952](https://user-images.githubusercontent.com/81202572/174576051-94644069-62d5-46b1-8ba7-54cc912a9fca.png)

# Storybook
![Storybook](https://user-images.githubusercontent.com/81202572/174576639-f89c9322-6190-48e2-8f56-fb470546c774.gif)

- ✅ Documentação de todo o design system da plataforma 
- ✅ Todos os estilos de botão, input, modal, etc representados na plataforma
- ✅ Possibilidade de edição e manipulação do componente de forma isolada
