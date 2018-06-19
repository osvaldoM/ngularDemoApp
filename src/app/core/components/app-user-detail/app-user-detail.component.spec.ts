import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Location} from '@angular/common';
import { UserDetailComponent } from './app-user-detail.component';
import {By} from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {UserService} from '../../services/user.service';
import {TestUserService} from '../../../testing/TestUserService.service';
import {Router} from '@angular/router';
import { MockComponent } from 'mock-component';
import {UserComponent} from '../app-user/user-list.component';
import {AppContentComponent} from '../app-content/app-content.component';
import {AppHeaderComponent} from '../app-header/app-header.component';


let component: UserDetailComponent;
let fixture: ComponentFixture<UserDetailComponent>,
  router: Router,
  location: Location;

const userComponentMock = MockComponent(UserComponent);

const routes = [
  {
    path: 'home',
    component: userComponentMock,
    children: [
      {path: 'users', component: userComponentMock},
      {path: 'users/details/:id', component: UserDetailComponent},
      {path: '**', redirectTo: 'users'}
    ]
  }
];

fdescribe('UserDetailsComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [UserDetailComponent, userComponentMock, AppHeaderComponent, AppContentComponent, UserComponent],
      providers: [{provide: UserService, useClass: TestUserService}]
    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    console.log('rota', router.url, location.path());
  });

  it('should have a back button', () => {
    let routerLinks;

    routerLinks = fixture.debugElement
      .queryAll(By.directive(RouterTestingModule));
    component.goBack();
    console.log('rota man', router.url);
    console.log('path' + location.path());
    expect(router.url).toContain('user');
    //console.log('bro', routerLinks);
    //routerLinks = linkDes.map(de => de.injector.get(RouterTestingModule));
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.iusers).not.toBeDefined();
  });

  it('should render list of users in the DOM contain a single element', () => {
    let userElement;
    fixture.detectChanges(); // trigger initial data binding
    userElement = fixture.debugElement
      .queryAll(By.css('.single-user'));
    expect(component.iusers.length).toEqual(userElement.length);
    expect(component.iusers.length).toEqual(1);
  });
});

