import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './app-user-detail.component';
import {By} from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {UserService} from '../../services/user.service';
import {TestUserService} from '../../../testing/TestUserService.service';

let component: UserDetailComponent;
let fixture: ComponentFixture<UserDetailComponent>;

fdescribe('UserDetailsComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserDetailComponent],
      providers: [{provide: UserService, useClass: TestUserService}]
    }).compileComponents();
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
  });

  it('should have a back button', () => {
    let routerLinks;

    routerLinks = fixture.debugElement
      .queryAll(By.directive(RouterTestingModule));

    console.log('bro', routerLinks);
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

