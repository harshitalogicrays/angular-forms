import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { NolayoutComponent } from './layout/nolayout/nolayout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { TdfformComponent } from './tdfform/tdfform.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MainlayoutComponent,NolayoutComponent,SidebarComponent,PagenotfoundComponent, TdfformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
