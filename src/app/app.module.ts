import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// We need to import the ReactiveFormsModule and HttpModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';


import {  HomeComponent } from './home/home.component';
import {  IndexComponent } from './app.index.component';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { HeaderComponent } from './app.header.component';
import { FooterComponent } from './app.footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

