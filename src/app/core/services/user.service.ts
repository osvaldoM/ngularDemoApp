import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IUser} from '../models/user.model';

@Injectable()
export class UserService {
  private _userUrl = 'https://randomuser.me/api/';

  constructor(private _http: Http) {}

  private extractUsers(response: Response): IUser[] {
    const results: any[] = response.json().results;

    const transformedResults = results.map((user) => {
      return {
        'gender': user.gender,
        'firstName': user.name.first,
        'lastName': user.name.last,
        'phone': user.phone,
        'email': user.email
      };
    });
    return <IUser[]> transformedResults;
  }

  getUsers(): Observable<IUser[]> {
    console.log('retrieving user');
    return this._http.get(this._userUrl)
      .map((response: Response) => this.extractUsers(response))
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }}
