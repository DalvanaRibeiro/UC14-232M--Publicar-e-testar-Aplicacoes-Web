# Aula 4 - Estrutura Básica do JSX

Na **Aula 4**, abordamos a **estrutura básica do JSX** e como utilizá-lo em aplicações React. O **JSX** (JavaScript XML) é uma extensão da sintaxe do JavaScript que permite escrever HTML dentro de código JavaScript. JSX é utilizado em React para definir como a interface de usuário será exibida.



## 🔧 O que é o **JSX**?

**JSX** é uma sintaxe que permite escrever código de interface de usuário de maneira semelhante ao HTML, mas com algumas diferenças e melhorias que o tornam ideal para ser utilizado no React.

Aqui estão algumas das principais características do JSX:

- **Sintaxe semelhante ao HTML:** O JSX se assemelha a HTML, mas tem regras próprias. Por exemplo, as tags precisam ser fechadas corretamente e a classe CSS é definida como `className` (para evitar conflitos com a palavra-chave `class` do JavaScript).
- **JavaScript dentro de HTML:** Você pode colocar expressões JavaScript dentro de JSX utilizando chaves `{}`. Por exemplo, é possível fazer interpolação de variáveis ou executar funções diretamente dentro do JSX.
- **Não é um HTML real:** JSX é compilado para chamadas de funções `React.createElement()` antes de ser renderizado no navegador. Isso significa que o que vemos no código JSX será transformado em JavaScript antes de ser exibido na interface.

## Link para aula 

Clique no link abaixo para acessar a gravação completa da aula:

[Aula 4 - Estrutura JSX](https://www.canva.com/design/DAGmy_sfV2k/YBo6oEiJgoWCWufGhhDBpA/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0)
## 📝 Exemplo Básico de JSX

Aqui está um exemplo simples de JSX em um componente React:

```jsx
import React from 'react';

function MeuComponente() {
  const nome = "Mundo";
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>Bem-vindo à Aula 4 de React.</p>
    </div>
  );
}

export default MeuComponente;
