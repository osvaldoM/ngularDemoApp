import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private authSource = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.authSource.asObservable();

  constructor() { }

  changeAuthStatus(status) {
    this.authSource.next(status);
  }

}
