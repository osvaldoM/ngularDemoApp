import {AuthService} from './auth.service';
import {bufferCount} from 'rxjs/operators';

describe('Authentication service', () => {
  let authService: AuthService;
  beforeEach(() => {
    authService = new AuthService();
  });
  it('#changeAuthStatus, should change the authentication status ', () => {
    const bufferedAuthenticationStatus = authService.isLoggedIn.pipe(bufferCount(2));
    const currentStatus = bufferedAuthenticationStatus.subscribe(value => {
      expect(value.reduce((accumulator, currentValue) => accumulator !== currentValue)).toBe(true);
    });
    authService.changeAuthStatus(true);
  });
});
