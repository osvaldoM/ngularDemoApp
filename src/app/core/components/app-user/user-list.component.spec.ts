import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user-list.component';
import {RouterLinkStubDirective} from "../../../testing/router-link-directive-stub";
import {By} from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';
import {UserService} from "../../services/user.service";
import {TestUserService} from "../../../testing/TestUserService.service";

let component: UserComponent;
let fixture: ComponentFixture<UserComponent>;
let linkDes,
  routerLinks;

fdescribe('UserListComponent ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RouterLinkStubDirective, UserComponent],
      providers: [{provide: UserService, useClass: TestUserService}]
    }).compileComponents();
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective));

  });


  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.iusers).toBe(undefined);
  });
  it('should render list of users in the DOM', () => {
    let userElements;
    fixture.detectChanges(); // trigger initial data binding
    userElements = fixture.debugElement
      .queryAll(By.css('.user-link'));
    expect(component.iusers.length).toEqual(userElements.length);
  });
});

