const Calculator = require('./script');

describe('Calculadora', () => {
  let mockDisplay;
  let calc;

  beforeEach(() => {
    mockDisplay = { textContent: '0' };
    calc = new Calculator(mockDisplay);
  });

  test('Adição simples', () => {
    calc.appendToDisplay('2');
    calc.appendToDisplay('+');
    calc.appendToDisplay('2');
    calc.calculate();
    expect(mockDisplay.textContent).toBe('4');
  });

  test('Limpar display', () => {
    calc.appendToDisplay('123');
    calc.clearDisplay();
    expect(mockDisplay.textContent).toBe('0');
  });

  test('Multiplicação', () => {
    calc.appendToDisplay('3');
    calc.appendToDisplay('×');
    calc.appendToDisplay('2');
    calc.calculate();
    expect(mockDisplay.textContent).toBe('6');
  });
});