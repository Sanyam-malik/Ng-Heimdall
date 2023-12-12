import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchUserComponent } from './components/switch-user/switch-user.component';
import { ConfigPanelComponent } from './components/config-panel/config-panel.component';
import { TooltipModule  } from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemsComponent } from './components/items/items.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { TagsComponent } from './components/tags/tags.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SettingsComponent } from './components/settings/settings.component';
import { UserselectComponent } from './components/userselect/userselect.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SwitchUserComponent,
    ConfigPanelComponent,
    SearchWidgetComponent,
    DashboardComponent,
    ItemsComponent,
    UsersComponent,
    LoginComponent,
    TagsComponent,
    ApplicationsComponent,
    SettingsComponent,
    UserselectComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
