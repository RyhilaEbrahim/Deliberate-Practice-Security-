import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private jwtHelper: JwtHelper,
    private router: Router) {
  }
  canActivate() {
    const token = localStorage.getItem('jwt');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
