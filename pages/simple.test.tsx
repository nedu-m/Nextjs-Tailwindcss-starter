export const sum = (a: number, b: number) => a + b;

export default function nameFunc(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

describe('nameFunc', () => {
  it('should return the full name', () => {
    expect(nameFunc('John', 'Doe')).toBe('John Doe');
  });
});

describe('sum()', () => {
  it('adds 1 + 2 to equal', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// test('should add 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
