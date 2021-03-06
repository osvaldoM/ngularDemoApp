import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';

import {IUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'ng-e-app-users',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserComponent implements OnInit {
  iusers: IUser[];
  private fieldsToInclude = ['gender', 'name', 'phone', 'email'];
  private numberOfUsersToLoad = 20;
  private requestParams = {
    'inc': this.fieldsToInclude.join(','),
    'noinfo': '',
    'results': this.numberOfUsersToLoad
  };

  constructor(private _user: UserService) {
  }

  ngOnInit(): void {
    this._user.getUsers(this.requestParams)
      .subscribe(iusers => this.iusers = iusers);
  }
}

