import {UserService} from './user.service';
import {Http, Response} from '@angular/http';
import {defer} from 'rxjs/observable/defer';

fdescribe('Service: UserService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;
  const fakeUsers = {'results': [
    {
      'gender': 'female',
      'name': {
        'title': 'miss',
        'first': 'lidiane',
        'last': 'teixeira'
      },
      'email': 'lidiane.teixeira@example.com',
      'phone': '(91) 0165-5512'
    },
    {
      'gender': 'male',
      'name': {
        'title': 'mr',
        'first': 'frederikke',
        'last': 'jørgensen'
      },
      'email': 'frederikke.jørgensen@example.com',
      'phone': '63798667'
    },
    {
      'gender': 'male',
      'name': {
        'title': 'mr',
        'first': 'johnny',
        'last': 'campbell'
      },
      'email': 'johnny.campbell@example.com',
      'phone': '071-767-6678'
    },
    {
      'gender': 'male',
      'name': {
        'title': 'mr',
        'first': 'peetu',
        'last': 'mattila'
      },
      'email': 'peetu.mattila@example.com',
      'phone': '06-097-049'
    },
    {
      'gender': 'female',
      'name': {
        'title': 'mrs',
        'first': 'غزل',
        'last': 'سهيلي راد'
      },
      'email': 'غزل.سهيليراد@example.com',
      'phone': '015-69948635'
    }
  ]};
  const usersStub = {
    json: function () {
      return fakeUsers;
    }
  };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('Http', ['get']);
    userService = new UserService(<any> httpClientSpy);
    httpClientSpy.get.and.returnValue(asyncData(usersStub));
  });

  it('Service: should return list of users', function () {
    userService.getUsers({}).subscribe(users => {
      const randomPositionInArray = Math.floor(Math.random() * Math.floor(users.length));
      expect(users[randomPositionInArray].email).toEqual(fakeUsers.results[randomPositionInArray].email);
    });
  });
  it('Service: should return a single user', function () {
    httpClientSpy.get.and.returnValue(asyncData(usersStub[0]));
    userService.getUsers({}).subscribe(users => {
      expect(users[0].email).toEqual(fakeUsers.results[0].email);
      expect(users[1]).not.toBeUndefined();
    });
  });
});

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
