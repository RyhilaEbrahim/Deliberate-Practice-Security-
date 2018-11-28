import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { JwtHelper } from 'angular2-jwt';
import { LoginService } from './services/login.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MessageService } from './services/message.service';

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
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'messages',
        component: MessagesComponent,
        data: { title: 'Messages' },
        canActivate: [AuthGuardService]
      }
    ])
  ],
  providers: [
    JwtHelper, 
    AuthGuardService, 
    LoginService, 
    HttpClient,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
