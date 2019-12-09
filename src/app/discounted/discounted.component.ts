import { Component, OnInit, Input } from '@angular/core';
import { DiscountModel } from '../shared/discount-model';
import { DiscountItems } from '../shared/discountitems';

@Component({
  selector: 'app-home',
  templateUrl: './discounted.component.html',
  styleUrls: ['./discounted.component.css']
})
export class DiscountedComponent implements OnInit {

  public discounted: DiscountModel[];

  constructor() { }

  ngOnInit() {
    this.discounted = DiscountItems;
  }



}
