import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IUser } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'ng-e-app-users',
    templateUrl: 'user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserComponent implements OnInit {
    iusers: IUser[];

    constructor(private _user: UserService) {}

  ngOnInit(): void {
      this._user.getUsers()
        .subscribe(iusers => this.iusers = iusers);
    }}

