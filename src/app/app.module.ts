import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarWithAsideComponent } from './sidebar-with-aside/sidebar-with-aside.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarWithAsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
