import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable()
export class LoginService {

  constructor(private router: Router, private http: HttpClient) {
  }

  invalidLogin: boolean;

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post('https://localhost:44331/api/auth/login', credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      this.invalidLogin = true;
    });
  }

  logOut() {
    localStorage.removeItem('jwt');
  }
}
