import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from './../shared/product-model';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //@Input() product: ProductModel;

  product: ProductModel;
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log('id-');
    console.log(id);
    this.product = this.productService.returnProduct(id);
  }

  goBack(): void {
    this.location.back();
  }

  addCart(): void{
    this.router.navigateByUrl('cart')
  }
}