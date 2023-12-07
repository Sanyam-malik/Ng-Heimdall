import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TagsComponent } from './tags/tags.component';
import { ApplicationsComponent } from './applications/applications.component';
import { UsersComponent } from './users/users.component';
import { UserselectComponent } from './userselect/userselect.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent 
  },
  {
    path: 'tags',
    component: TagsComponent
  }, 
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'userselect',
    component: UserselectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
