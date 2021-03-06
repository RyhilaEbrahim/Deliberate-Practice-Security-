import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService, private router: Router) {
  }

  invalidLogin: boolean;

  ngOnInit() {
  }

  login(form: NgForm) {
    this.loginService.login(form)
      .subscribe(token => {
        localStorage.setItem('jwt', token);
        this.invalidLogin = false;
        this.router.navigate(['home']);
      }, err => {
        this.invalidLogin = true;
      });
  }

}
