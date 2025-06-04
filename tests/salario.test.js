const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const htmlPath = path.join(__dirname, '..', 'calculadoras-simples', 'scalc-salarioliquido.html');
const html = fs.readFileSync(htmlPath, 'utf-8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });
const { calcularINSS } = dom.window;

describe('calcularINSS', () => {
  test('salário até 2571.29', () => {
    expect(calcularINSS(2000)).toBeCloseTo(160.2, 2);
  });

  test('salário até 3856.94', () => {
    expect(calcularINSS(3000)).toBeCloseTo(263.0613, 2);
  });

  test('salário até 7507.49', () => {
    expect(calcularINSS(5000)).toBeCloseTo(525.9225, 2);
  });

  test('salário acima do teto', () => {
    expect(calcularINSS(8000)).toBeCloseTo(876.9711, 2);
  });
});
