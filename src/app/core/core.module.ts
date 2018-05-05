import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { UserComponent } from './components/app-user/user-list.component';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [AppHeaderComponent, AppContentComponent, UserComponent],
  exports: [AppHeaderComponent, AppContentComponent, UserComponent],
  providers: [
    AppService, UserService
  ]
})
export class CoreModule { }
