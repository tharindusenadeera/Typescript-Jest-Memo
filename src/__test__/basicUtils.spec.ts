import { authenticateUser, product, usernameLowercase, UsernameToLowercase } from '../app/basicUtils';

describe('BasicUtil test suite', () => {
  it('return the product of 3 and 2', () => {
    const actual = product(3, 2);
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(8);
    expect(actual).toBeGreaterThan(5);
  });
});

// According to AAA
describe('BasicUtil test suite accoridng to AAA', () => {
  it('return the product of 3 and 2', () => {
    // arrange
    const sut = product;
    // acting
    const actual = sut(3, 2);
    // asserting
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(8);
    expect(actual).toBeGreaterThan(5);
  });
  // Parameterized testing
  it.each([
    [2, 3, 6],
    [0, 7, 0],
    [5, 10, 50],
  ])('should return the product of %i as %i', (a, b, expected) => {
    const actual = product(a, b);
    expect(actual).toEqual(expected);
  });

  it.each([
    { input: 'Tharindu', expected: 'tharindu' },
    { input: 'Lakshan', expected: 'lakshan' },
  ])('$input to lowercase should be $expected', ({ input, expected }) => {
    const actual = usernameLowercase(input);
    expect(actual).toBe(expected);
  });

  it('User authentication', () => {
    const sut = authenticateUser;
    const actual = sut('deveLOPER', 'dev');
    expect(actual.usernameToLower).toBe('developer');
    expect(actual.usernameCharacters).toEqual(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R']);
    expect(actual.usernameCharacters).toContain('e');
  });

  describe('Authenticate test suit', () => {
    it('return the lowercase of a valid username', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameToLower).toBe('developer');
    });
    it('return the username characters', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameCharacters).toEqual(['d', 'e', 'v', 'e', 'L', 'O', 'P', 'E', 'R']);
    });
    it('return the username characters not in order', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameCharacters).toEqual(expect.arrayContaining(['L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e']));
    });
    it('return valid user details', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.userDetails).toEqual({});
      expect(actual.userDetails).toBeDefined();
      expect(actual.userDetails).not.toBeUndefined();
      expect(actual.userDetails).toBeTruthy();
      expect(actual.userDetails).not.toBeFalsy();
    });
    it('return valid user isAuthenticated', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.isAuthenticated).toEqual(true);
      expect(actual.isAuthenticated).toBeTruthy();
      expect(actual.isAuthenticated).not.toBeFalsy();
    });
  });

  // According to FIRST method in unit testing
  describe('usernameToLowercase test suite', () => {
    // setup
    let sut: UsernameToLowercase;
    beforeEach(() => {
      console.log(' Setup from here');
      sut = new UsernameToLowercase();
    });
    // afterEach(() => {
    //   console.log('Tear down from here');
    // });
    it('return the lowercase of a valid username', () => {
      const actual = sut.toLower('Bob');
      console.log('I am the main test');
      expect(actual).toBe('bob');
    });
    it('throw an error for an invalid username', () => {
      expect(() => sut.toLower('')).toThrow();
      expect(() => sut.toLower('')).toThrowError('Invalid username, Sorry !');
    });
    it('throw an error for an invalid username - another', () => {
      function handleError() {
        const actual = sut.toLower('');
      }
      expect(handleError).toThrow();
    });
    it.todo('test valid password');
  });
});
