import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.sass']
})
export class PageContactComponent implements OnInit {
  mgs_out = '';
  mgs_show = false;
  error = false;

  name = '';
  email = '';
  subject = '';
  question = '';

  constructor() { }

  ngOnInit() {
  }

  ClickSend() {
    this.mgs_out = '';
    this.mgs_show = false;
    this.error = false;

    if (this.name == '') {
      if (!this.error) {
        this.mgs_out += 'The name';
      } else {
        this.mgs_out += ', name';
      }
      
      this.error = true;
    }
    
    if (this.subject == '') {
      if (!this.error) {
        this.mgs_out += 'The subject';
      } else {
        this.mgs_out += ', subject';
      }

      this.error = true;
    }

    if (this.question == '') {
      if (!this.error) {
        this.mgs_out += 'The question';
      } else {
        this.mgs_out += ', question';
      }

      this.error = true;
    }

    if (this.email == '') {
      if (!this.error) {
        this.mgs_out += 'The email';
      } else {
        this.mgs_out += ', email';
      }

      this.error = true;
    }

    if (this.error) {
      this.mgs_out = this.mgs_out.replace(/,([^,]*)$/, ' and'+'$1');
      this.mgs_out += ' must be filled out.';
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) && this.email != '') {
      if (this.error) {
        this.mgs_out += " And the email isn't valid."
      } else {
        this.mgs_out += "The email isn't valid.";
      }

      this.error = true;
    }

    if (!this.error) {
      this.mgs_out = 'The question is send.';

      //TODO send eamil
    }
    this.mgs_show = true;
  }
}
