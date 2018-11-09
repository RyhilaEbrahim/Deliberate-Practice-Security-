import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { JwtHelper } from 'angular2-jwt';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'messages', component: MessagesComponent, canActivate: [AuthGuardService] }])
  ],
  providers: [
  JwtHelper, AuthGuardService, LoginService, HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
