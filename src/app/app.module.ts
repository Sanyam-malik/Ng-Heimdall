import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchUserComponent } from './switch-user/switch-user.component';
import { ConfigPanelComponent } from './config-panel/config-panel.component';
import { TooltipModule  } from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { TagsComponent } from './tags/tags.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SettingsComponent } from './settings/settings.component';

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
    SettingsComponent
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
