import {UserService} from './user.service';
import {Http, Response} from '@angular/http';
import {asyncData} from '../../testing/async-observable-helpers';
import {getSingleUser, getUsers} from '../../testing/data/fake-users';


fdescribe('UserService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;
  const usersStub = {
    json: function () {
      return getUsers;
    }
  };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('Http', ['get']);
    userService = new UserService(<any> httpClientSpy);
  });

  it('should return list of users', function () {
    httpClientSpy.get.and.returnValue(asyncData(usersStub));
    userService.getUsers({}).subscribe(users => {
      const randomPositionInArray = Math.floor(Math.random() * Math.floor(users.length));
      expect(users[randomPositionInArray].email).toEqual(getUsers().results[randomPositionInArray].email);
    });
  });
  it('should return a single user', function () {
    const singleUser = getSingleUser();
    httpClientSpy.get.and.returnValue(asyncData(singleUser));
    userService.getUsers({}).subscribe(users => {
      expect(users[0].email).toEqual(singleUser.results[0].email);
      expect(users[1]).not.toBeUndefined();
    });
  });
});
