import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss'],
})
export class ContactSuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
