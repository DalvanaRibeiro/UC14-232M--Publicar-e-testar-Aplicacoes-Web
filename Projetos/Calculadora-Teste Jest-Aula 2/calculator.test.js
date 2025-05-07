// Importa a classe Calculator do arquivo script.js
import Calculator from 'script';


// Describe cria um bloco de testes agrupados (suite de testes)
describe('Calculadora', () => {
  // Declara variáveis que serão usadas nos testes
  let mockDisplay;  // Mock do elemento display
  let calc;         // Instância da calculadora

  // beforeEach é executado ANTES de cada teste
  beforeEach(() => {
    // Cria um mock simples do display com textContent
    mockDisplay = { textContent: '0' };
    
    // Cria uma nova instância da Calculator, injetando o mock do display
    calc = new Calculator(mockDisplay);
  });

  // Teste 1: Verifica operação de adição simples
  test('Adição simples', () => {
    // Simula cliques nos botões: 2, +, 2
    calc.appendToDisplay('2');
    calc.appendToDisplay('+');
    calc.appendToDisplay('2');
    
    // Simula clique no botão de igual (=)
    calc.calculate();
    
    // Verifica se o resultado no display é 4
    expect(mockDisplay.textContent).toBe('4');
  });

  // Teste 2: Verifica a função de limpar display
  test('Limpar display', () => {
    // Simula digitação de 123
    calc.appendToDisplay('1');
    calc.appendToDisplay('2');
    calc.appendToDisplay('3');
    
    // Simula clique no botão C (clear)
    calc.clearDisplay();
    
    // Verifica se o display voltou para 0
    expect(mockDisplay.textContent).toBe('0');
  });

  // Teste 3: Verifica operação de multiplicação
  test('Multiplicação', () => {
    // Simula cliques nos botões: 3, ×, 2
    calc.appendToDisplay('3');
    calc.appendToDisplay('×');
    calc.appendToDisplay('2');
    
    // Simula clique no botão de igual (=)
    calc.calculate();
    
    // Verifica se o resultado no display é 6
    expect(mockDisplay.textContent).toBe('6');
  });
});