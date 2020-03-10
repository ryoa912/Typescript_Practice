import { isPositive } from '../src/ex01';

test('positive number', () => {
  expect(isPositive(1)).toBe(true);
});

test('negative number', () => {
  expect(isPositive(-1)).toBe(false);
});
