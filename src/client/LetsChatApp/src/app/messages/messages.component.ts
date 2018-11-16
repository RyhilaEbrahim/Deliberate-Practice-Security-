import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any;
  error: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const token = localStorage.getItem('jwt');
    this.http.get('https://localhost:44331/api/messages', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.messages = response;
    }, err => {
      this.error = JSON.stringify(err);
      console.log(err);
    });
  }

}
