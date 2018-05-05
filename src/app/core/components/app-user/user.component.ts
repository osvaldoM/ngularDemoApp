import { Component } from '@angular/core';


@Component({
    selector: 'ng-e-app-users',
    templateUrl: 'user.component.html'
})
export class UserComponent {
    userList: any[] = [{
        "gender": "male",
        "name": "hoogmoed"
    },
    {
        "gender": "female",
        "name": "caraiio"
    }];
}

