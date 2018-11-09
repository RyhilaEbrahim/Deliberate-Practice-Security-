import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const token = localStorage.getItem('jwt');
    this.http.get('http://localhost:44331/api/messages', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.messages = response;
    }, err => {
      console.log(err);
    });
  }

}
