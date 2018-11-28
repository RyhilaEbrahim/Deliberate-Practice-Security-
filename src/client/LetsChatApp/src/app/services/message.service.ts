import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  constructor(
    private http: HttpClient) {
  }

  getMessages$(): Observable<any> {

    const token = localStorage.getItem('jwt');
    const headers =  {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get('https://localhost:44331/api/messages', headers)
      .map(messages => (<any>messages));
  }
}
