import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
    this.invalidLogin = loginService.invalidLogin;
  }

  invalidLogin: boolean;
  ngOnInit() {
  }

  login(form: NgForm) {
    this.loginService.login(form);
  }

}
