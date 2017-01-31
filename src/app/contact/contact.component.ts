import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { EmailService } from './email.service';
import { Contact } from './contact';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService, MdSnackBar]
})

export class ContactComponent implements OnInit {
  contact:Contact;

  constructor(private emailService: EmailService,
              private snackBar: MdSnackBar) {
  }

  sendMail(contact:Contact):void {
    this.emailService.sendMail(contact)
      .then(response => console.log(response));

    this.snackBar.open(`Thanks for the message ${contact.name}, we'll be in touch soon.`, 'Email Sent',  { duration: 3000});
    this.contact = new Contact();

  }

  ngOnInit():void {
    this.contact = new Contact();

  }
}
