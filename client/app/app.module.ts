import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BahnhofComponent } from './bahnhof/bahnhof/bahnhof.component';
import { LoginComponent } from './login/login.component';

import { Routing } from './app.routing';
import { AuthGuard } from './guard/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { BahnhofLineComponent } from './bahnhof/bahnhof-line/bahnhof-line.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BahnhofComponent,
    LoginComponent,
    MenuComponent,
    BahnhofLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Routing,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
