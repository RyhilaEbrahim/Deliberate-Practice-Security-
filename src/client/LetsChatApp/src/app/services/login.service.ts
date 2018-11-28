import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient) {
  }

  login(form: NgForm): Observable<any> {
    const credentials = JSON.stringify(form.value);
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://localhost:44331/api/auth/login', credentials, headers)
      .map(response => (<any>response).token);
  }

  logOut() {
    localStorage.removeItem('jwt');
  }
}
