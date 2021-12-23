:unicorm:

# Projeto unicornio: GNDI

Um projeto do **NotreDame**

### Equipe

| Nome     | Role        | Contato                      |
| -------- | ----------- | ---------------------------- |
| Henrique | Facilitador | henrique.neto@devires.com.br |
| Kelvin   | Frontend    | kelvin.arnold@devires.com.br |
| Hada     | Frontend    | hadad@devires.com.br         |
| Renata   | Designer    | renatad@devires.com.br       |

### Tecnologias

Definimos quais tecnologias, livrarias e recursos serão utilizados no desenvolvimento do projeto. Os critérios que nos levaram a escolher as seguintes tecnologias seguem tres pontos:

- Curva de aprendizado
- Comunidades grandes e bem definidas
- Nivel de conhecimento

**React**

Nos escolhemos o react como framework principal para o desenvolvimento da plataforma web por ser uma tecnologia que tem uma menor curva de aprendizado por ser um framework popular no mercado e tem uma comunidade bem completa.

[Create a New React App - React](https://reactjs.org/docs/create-a-new-react-app.html)

**Typescript**

Para a tipagem dos componentes de classes do projeto

[JavaScript With Syntax For Types.](https://www.typescriptlang.org)

**Styled component**

Livraria para criação de componentes customizados

[styled-components](https://styled-components.com)

**Axios**

Ferramenta para consumir os serviços api

[Getting Started](https://axios-http.com/docs/intro)

**Tailwind**

Livraria CSS / UI Components para agilizar na criação de componentes e modo responsivo.

[Tailwind UI](https://tailwindui.com)

**Github**

Ferramenta para gestionar e versionar código

[GitHub: Where the world builds software](https://github.com)

**React Router**

Ferramenta para gerencias rotas

[React Router: Declarative Routing for React](https://reactrouter.com)

**Outros tecnologias**

ramda: [https://ramdajs.com](https://ramdajs.com/)

moment: [https://momentjs.com](https://momentjs.com/)

react-hook-form: [https://react-hook-form.com](https://react-hook-form.com/)

yup: [https://github.com/jquense/yup](https://github.com/jquense/yup)

uniqid: [https://www.npmjs.com/package/uniqid](https://www.npmjs.com/package/uniqid)

prettier: [https://prettier.io](https://prettier.io/)

eslint: [https://eslint.org](https://eslint.org/)

Husky: [https://github.com/typicode/husky](https://github.com/typicode/husky)

lint-staged: [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

commitlint: [https://commitlint.js.org/#/](https://commitlint.js.org/#/)

testing-library: [https://testing-library.com](https://testing-library.com/)

twin.macro: [https://blog.formpl.us/twin-macro-tutorial-for-beginners-styling-with-tailwind-css-and-emotion-in-react-5228c819d713](https://blog.formpl.us/twin-macro-tutorial-for-beginners-styling-with-tailwind-css-and-emotion-in-react-5228c819d713)

classnames: [https://www.npmjs.com/package/classnames](https://www.npmjs.com/package/classnames)

Tailwind/typography: [https://github.com/tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)

---

## Scripts

Rodar o seguinte comando para instalar a versão do node

```
nvm use
```

Para instalar todos as livrarias

```
yarn install:clean
```

Para rodar o projeto

```
yarn start
```

Generar um componente

```
Script
yarn generate:component ui|component|page NAME_COMPONENT

Exemplo
yarn generate:component ui Button
```

---

## Git Rules

### Branch

utilizaremos duas branchs:
`master` para manter o código final
`develop` para trabalho de desenvolvimento

### Tasks

Para cada nova task/feature temos que criar uma branch nova a partir da `branch develop` e apos finalizar com o desenvolvimento da Task/Feature faremos um PR(Pull Request) para a `branch develop`. Logo podemos solicitar alguem do time fazer a validação do código e mergear a branchs.

```
Script
git checkout -b TASK/NUMERO_TASK

Exemplo
git checkout -b TASK/01
```

### Commits

O projeto implementou a regras de commits utilizando commitlint.
Todo commit precisa ter o seguinte formato:

```
Script
git commit -m "TASK-YOUR_TASK_NUMBER: YOUR_DESCRIPTIO"

Exemplo
git commit -m "TASK-01: Border do Button atualizado"

```

---

## Fora do escopo

O que não está contemplado para o desenvolvimento da plataforma

- Suporte 100% para dispositivos mobile
- i18n: suporte a multiples idiomas
- Animações complejas

---

## Links de apoio

Design system [Figma](https://xd.adobe.com/view/2435038f-f4a0-48b3-9fcd-42d64e0436bd-7166/)
