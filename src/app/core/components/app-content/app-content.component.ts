import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
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
    this._authService.changeAuthStatus(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this._authService.changeAuthStatus(false);
  }

}
