// Тестирую работу jest, это потом удалить надо

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});
