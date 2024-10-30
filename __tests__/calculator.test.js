// __tests__/calculator.test.js
const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculadora', () => {
    test('soma dois números', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('subtrai dois números', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(0, 1)).toBe(-1);
        expect(subtract(2, 2)).toBe(0);
    });

    test('multiplica dois números', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(-1, 5)).toBe(-5);
        expect(multiply(0, 10)).toBe(0);
    });

    test('divide dois números', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(5, 2)).toBe(2.5);
    });

    test('lança erro ao dividir por zero', () => {
        expect(() => divide(1, 0)).toThrow('Divisão por zero');
    });
});
