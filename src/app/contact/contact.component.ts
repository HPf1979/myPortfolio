import { ExpressionType } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactSuccessComponent } from '../contact-success/contact-success.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  async sendMail() {
    //action="https://herlina-pfeiffer.developerakademie.net/send_mail/send_mail.php"
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //animation
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    console.log(fd.append);

    //senden

    const response = await fetch(
      'https://herlina-pfeiffer.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',

        body: fd,
      }
    );

    if (!response.ok) throw new Error('Response not ok');
    else {
      this.router.navigate(['/contact-success']);
    }

    //Text anzeigen: Nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
