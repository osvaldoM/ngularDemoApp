import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

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
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this._authService.toggleAuthStatus(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this._authService.toggleAuthStatus(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this._authService.toggleAuthStatus(false);
  }

}
