import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IUser} from '../core/models/user.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const fakeUsers = [
  {
    'gender': 'female',
    'firstName': 'lidiane',
    'lastName': 'teixeira',
    'email': 'lidiane.teixeira@example.com',
    'phone': '(91) 0165-5512'
  }
];
const usersObservable = new BehaviorSubject<IUser[]>(fakeUsers);
@Injectable()
export class TestUserService {

  getUsers(requestParams: Object): Observable<IUser[]> {
    return usersObservable.asObservable();
  }
}
