import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../shared/product-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: ProductModel[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(): void {
    this.router.navigateByUrl('cart');
  }

}
