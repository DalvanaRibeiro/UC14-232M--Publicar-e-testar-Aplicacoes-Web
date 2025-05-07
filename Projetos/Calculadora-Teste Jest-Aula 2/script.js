// Classe principal que contém toda a lógica da calculadora
class Calculator {
    // Construtor da classe - inicializa a calculadora
    constructor(displayElement) {
      // Armazena o elemento do display (visor) da calculadora
      this.display = displayElement;
      // Sinalizador para controlar quando o display deve ser limpo após um cálculo
      this.shouldClearDisplay = false;
    }
  
    // Método para adicionar valores ao display
    appendToDisplay(value) {
      // Se o display mostrar '0' (e não for um ponto decimal)
      if (this.display.textContent === '0' && value !== '.') {
        // Substitui o zero pelo valor digitado
        this.display.textContent = value;
      } 
      // Se for para limpar o display (após um cálculo)
      else if (this.shouldClearDisplay) {
        // Mostra o novo valor e reseta a flag
        this.display.textContent = value;
        this.shouldClearDisplay = false;
      } 
      // Caso normal - concatena o valor ao existente
      else {
        this.display.textContent += value;
      }
    }
  
    // Método para limpar o display
    clearDisplay() {
      // Reseta o display para '0'
      this.display.textContent = '0';
    }
  
    // Método para calcular a expressão no display
    calculate() {
      try {
        // Substitui símbolos × e ÷ por * e / para avaliação matemática
        const expression = this.display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
        // Avalia a expressão matemática (cuidado: eval tem riscos de segurança em produção)
        const result = eval(expression);
        // Mostra o resultado e ativa a flag para limpar no próximo input
        this.display.textContent = result.toString();
        this.shouldClearDisplay = true;
      } catch (error) {
        // Em caso de erro na expressão, mostra 'Erro'
        this.display.textContent = 'Erro';
        this.shouldClearDisplay = true;
      }
    }
}
  
// Código que só executa no navegador (não em testes)
if (typeof window !== 'undefined') {
    // Espera o DOM estar completamente carregado
    document.addEventListener('DOMContentLoaded', () => {
      // Obtém referência ao elemento do display
      const display = document.getElementById('display');
      // Cria uma nova instância da calculadora
      const calc = new Calculator(display);
      
      // Conecta todos os botões da calculadora
      document.querySelectorAll('button').forEach(button => {
        // Configura o botão de limpar (C)
        if (button.id === 'clear') {
          button.addEventListener('click', () => calc.clearDisplay());
        } 
        // Configura o botão de igual (=)
        else if (button.id === 'equals') {
          button.addEventListener('click', () => calc.calculate());
        } 
        // Configura todos os outros botões (números e operadores)
        else {
          button.addEventListener('click', () => calc.appendToDisplay(button.textContent));
        }
      });
    });
}
  
// Exporta a classe para uso em testes (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}

const MeuComponente = () => <h1>Olá, mundo!</h1>;

const elemento = React.createElement('h1', null, 'Olá, mundo!');
