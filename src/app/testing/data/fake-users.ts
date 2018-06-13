const fakeUsers = [
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
    ];

  export function  getSingleUser() {
    const randomPositionInArray = Math.floor(Math.random() * Math.floor(fakeUsers.length));
    return {
      results: [fakeUsers[randomPositionInArray]]
    };
  }
  export function getUsers() {
    return {
      results: fakeUsers
    };
  }
