import { Component, OnInit } from '@angular/core';
import { HelpModel } from './../shared/help-model';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  helps: HelpModel[] = [
    {
      Question: 'What do the various types of shipping mean?',
      Answer: 'Normal Shipping orders can take up to 14 days to arrive, Express Shipping takes no more than 5, and Same Day Shipping orders arrive the day of purchase.',
    },
    {
      Question: 'Will I be notified of discounted items?',
      Answer: 'Customers can opt into the email list in order to receive news about discounts and new acquisitions.',
    },
    {
      Question: 'How can I recover my account if it is lost or stolen?',
      Answer: 'Call our customer support number at 804-555-5555 to speak to a representative who will be glad to help.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
