import { IAuthData } from './authData';

export function product(a: number, b: number): number {
  return a * b;
}

export function usernameLowercase(username: string) {
  return username.toLocaleLowerCase();
}

export function authenticateUser(username: string, password: string): IAuthData {
  const authStatus = username === 'deveLOPER' && password === 'dev';
  return {
    usernameToLower: username.toLocaleLowerCase(),
    usernameCharacters: username.split(''),
    userDetails: {},
    isAuthenticated: authStatus,
  };
}

export class UsernameToLowercase {
  public toLower(username: string) {
    if (username === '') {
      throw new Error('Invalid username, Sorry !');
    }
    return username.toLocaleLowerCase();
  }
}
