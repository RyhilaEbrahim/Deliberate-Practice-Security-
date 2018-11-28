import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any[];

  constructor(
    private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages$()
    .subscribe(messages => {
      this.messages = messages;
    }, err => {
      console.log(err);
    });
  }

}
