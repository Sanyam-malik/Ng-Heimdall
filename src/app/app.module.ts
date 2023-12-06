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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SwitchUserComponent,
    ConfigPanelComponent,
    SearchWidgetComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
