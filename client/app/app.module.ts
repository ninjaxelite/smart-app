import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BahnhofComponent } from './bahnhof/bahnhof.component';
import { BahnhofService } from './bahnhof/bahnhof.service';
import { LoginComponent } from './login/login.component';

import { Routing } from './app.routing';
import { AuthGuard } from './guard/auth.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BahnhofComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    BahnhofService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
