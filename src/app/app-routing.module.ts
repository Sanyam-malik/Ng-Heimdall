import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TagsComponent } from './components/tags/tags.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { UsersComponent } from './components/users/users.component';
import { UserselectComponent } from './components/userselect/userselect.component';

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
