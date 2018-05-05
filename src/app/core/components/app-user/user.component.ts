import {Component, OnInit} from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'ng-e-app-users',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    iusers: IUser[];

    constructor(private _user: UserService) {}

  ngOnInit(): void {
      this._user.getUsers()
        .subscribe(iusers => this.iusers = iusers);
    }}

