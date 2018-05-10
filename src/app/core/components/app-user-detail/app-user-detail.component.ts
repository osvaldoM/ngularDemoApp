import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';

import {IUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'ng-e-app-user',
  templateUrl: 'app-user-detail.component.html',
  styleUrls: ['./app-user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  iusers: IUser[];
  private fieldsToInclude = ['gender', 'name', 'phone', 'email'];
  private numberOfUsersToLoad = 1;
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

