import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; 

import { User } from '../models/user.model';

@Injectable()
export class UserService {
   private _userUrl='https://randomuser.me/api/';

   constructor(private _http: Http){}
   
   getUsers(): Observable<User[]> {
      return this._http.get(this._userUrl)
      .map((response: Response) => <User[]> response.json())
      .do(data => console.log(JSON.stringify(data)))
      .catch(this.handleError);
   }

   private handleError(error: Response) { 
    console.error(error); 
    return Observable.throw(error.json().error()); 
 } 
}