const tasks = require('./tasks');

test('should return the length of word', () => {
const word = 'L';
expect(tasks.stringLength(word)).toBe(1);
});

test('should return the reverse of word', () => {
  const word = 'Hello';
  expect(tasks.reverseString(word)).toBe('olleH');
  });
