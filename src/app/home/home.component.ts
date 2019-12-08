import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../shared/product-model';
import { ProductItems } from '../shared/productitems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: ProductModel[];

  constructor() { }

  ngOnInit() {
    this.products = ProductItems;
  }



}
