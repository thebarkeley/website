import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact} from './contact';

@Injectable()
export class EmailService {
  private mailUrl = 'https://barkeley-web.herokuapp.com/mail?';

  constructor(private http: Http){}

  sendMail(contact: Contact): Promise<string> {
    console.log(contact.name);
    // construct URL
    const url = `${this.mailUrl}name=${contact.name}&phone=${contact.telephone}&from=${contact.email}&text=${contact.message}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

