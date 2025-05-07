# 🚀 **Atividade: Criando um Projeto React Profissional com Vite**

### **Objetivo:**
Neste exercício, você irá criar um novo projeto React utilizando o **Vite**, com a estrutura de componentes e estilos separados. O objetivo é organizar o código de forma profissional, com componentes reutilizáveis, estilos bem definidos e a funcionalidade de um botão que leva a um vídeo.

### **Instruções:**

1. **Criação do Projeto:**
   - Crie um novo projeto React utilizando o **Vite**.
   - Para criar o projeto, execute o seguinte comando no terminal:
     ```bash
     npm create vite@latest meu-projeto --template react
     ```
     Isso vai gerar um projeto React básico com a estrutura do Vite.
   - Ao seguir o comando acima, escolha a opção **React** e **JavaScript**.

2. **Organização do Projeto:**
   - Organize o projeto da seguinte maneira:
     - Uma pasta **`components/`** para armazenar os componentes.
     - Cada componente deve ter seu próprio arquivo `.jsx` e seu respectivo arquivo de estilo `.css` dentro da pasta do componente.

3. **Estrutura dos Componentes:**
   - O projeto deve ter **pelo menos 5 componentes**:
     - **`Titulo`**: Exibe um título de boas-vindas ao usuário.
     - **`Paragrafo`**: Exibe um parágrafo com uma breve descrição sobre o projeto.
     - **`Imagem`**: Exibe uma imagem de sua escolha (pode ser um logo ou imagem relacionada ao tema do seu projeto).
     - **`ListaFrutas`**: Exibe uma lista simples de frutas (ou qualquer outro item de sua escolha).
     - **`Botao`**: Exibe um botão que, ao ser clicado, leva o usuário para um **vídeo do YouTube** (escolha um vídeo interessante ou educativo).

4. **Funcionalidade do Botão:**
   - O botão **deve conter um link para um vídeo** (pode ser de sua escolha). Use a tag `<a>` com o atributo `href` para linkar ao vídeo desejado.
   - Quando o botão for clicado, o usuário deverá ser redirecionado para o vídeo.

5. **Estilização:**
   - Cada componente deve ter seu próprio arquivo `.css` com estilos específicos.
   - O **`App.css`** deve conter os estilos globais para o layout da página (como centralização do conteúdo e espaçamento).
   - O projeto deve ser visualmente agradável, com uma boa organização de cores e espaçamentos.

6. **Boas Práticas:**
   - Mantenha a estrutura de pastas bem organizada.
   - Nomeie os arquivos e pastas de maneira clara e objetiva.
   - Use **comentários** no código explicando o que cada parte faz.

### **Requisitos:**
- O botão deve redirecionar para **qualquer vídeo do YouTube**.
- O layout deve ser responsivo e funcionar bem em telas de diferentes tamanhos.
- Os componentes devem ser reutilizáveis e bem estruturados.
- **Não use bibliotecas externas** além do React e ReactDOM para este exercício. Não é necessário usar bibliotecas de UI como Material-UI ou Bootstrap.
  
### **Entregáveis:**
1. O código completo do projeto **em um repositório GitHub**.
2. O vídeo (de até 2 minutos) **demonstrando a aplicação funcionando**.

---

### **Dica:**
Escolha um tema interessante para os seus componentes! Pode ser algo educativo, como uma lista de alimentos saudáveis, ou algo divertido, como uma lista de filmes favoritos. A criatividade é bem-vinda!

---

### **Exemplo de Fluxo do Botão:**
1. Ao clicar no botão, o usuário será redirecionado para o vídeo do YouTube.
2. O vídeo será exibido em uma nova aba do navegador.

---

### **Avaliação:**
Seu trabalho será avaliado com base nos seguintes critérios:
- **Organização do código**: Estrutura de pastas e clareza do código.
- **Funcionalidade**: O botão redireciona corretamente para o vídeo.
- **Estilo**: O layout é visualmente agradável e responsivo.
- **Boas práticas**: Comentários claros e código bem estruturado.

---

### **Entrega:**
Submeta o seu repositório do GitHub e o vídeo de demonstração até **[data de entrega]**.

---

### **Desafio Extra (opcional):**
- Implemente uma funcionalidade adicional, como um contador de cliques no botão ou uma galeria de imagens interativa.

---

### **Como Rodar o Projeto com Vite:**

Após clonar o repositório ou criar o projeto, siga os passos abaixo para rodar a aplicação localmente:

1. Instale as dependências:
   ```bash
   npm install
