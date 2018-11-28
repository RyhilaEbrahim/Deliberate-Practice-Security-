import { JwtHelper } from 'angular2-jwt';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

  constructor(
    private jwtHelper: JwtHelper, private loginService: LoginService) {
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } 
      return false;
  }

  logout() {
    this.loginService.logOut();
  }

}
