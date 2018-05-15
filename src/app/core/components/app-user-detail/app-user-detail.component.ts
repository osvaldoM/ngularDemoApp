import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from '@angular/router';
import {IUser} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'ng-e-app-user',
  templateUrl: 'app-user-detail.component.html',
  styleUrls: ['./app-user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  iusers: IUser[];
  private fieldsToInclude = ['gender', 'name', 'phone', 'email', 'picture'];
  private numberOfUsersToLoad = 1;
  private requestParams = {
    'inc': this.fieldsToInclude.join(','),
    'noinfo': '',
    'results': this.numberOfUsersToLoad,
    'seed': ''
  };

  constructor(private _user: UserService,
              private _router: Router,
              private  _activatedRoute: ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit(): void {
    this.requestParams.seed = this._activatedRoute.snapshot.params['id'];
    this._user.getUsers(this.requestParams)
      .subscribe(iusers => this.iusers = iusers);
  }

  goBack() {
    this._location.back();
  }
}

