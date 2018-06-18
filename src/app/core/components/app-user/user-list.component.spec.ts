import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserComponent} from './user-list.component';
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from '@angular/router/testing';
import {UserService} from "../../services/user.service";
import {TestUserService} from "../../../testing/TestUserService.service";

let component: UserComponent;
let fixture: ComponentFixture<UserComponent>;

fdescribe('UserListComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserComponent],
      providers: [{provide: UserService, useClass: TestUserService}]
    }).compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should have link to userDetails', () => {
    let routerLinks;

    routerLinks = fixture.debugElement
      .queryAll(By.directive(RouterTestingModule));

    console.log('bro', routerLinks);
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.iusers).not.toBeDefined();
  });
  it('should render list of users in the DOM', () => {
    let userElements;
    fixture.detectChanges(); // trigger initial data binding
    userElements = fixture.debugElement
      .queryAll(By.css('.user-link'));
    expect(component.iusers.length).toEqual(userElements.length);
  });
});

