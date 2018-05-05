import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user: IUser = {
    firstName: 'Ahsan',
    lastName: 'Ayaz',
    email: 'ayaz@mail.com',
    phone: '+25845695874'
  };
  isLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.isLoggedIn = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
  }

}
