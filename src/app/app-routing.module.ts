import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LandingComponent} from './landing/landing.component';
import {UserComponent} from './core/components/app-user/user-list.component';
import {UserDetailComponent} from './core/components/app-user-detail/app-user-detail.component';


const routes: Routes = [{
  path: 'landing',
  component: LandingComponent
}, {
  path: 'home',
  component: HomeComponent,
  children: [
    {path: 'users', component: UserComponent},
    {path: 'users/details', component: UserDetailComponent},
    {path: '**', redirectTo: 'users'}
  ]
}, {
  path: '**',
  redirectTo: 'landing'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
