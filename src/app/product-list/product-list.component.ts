import { Component, OnInit } from '@angular/core';
import { ProductModel } from './../shared/product-model';
import { ProductItems } from './../shared/productitems';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[];
  public selectedProduct: ProductModel;

  constructor(private ProductService: ProductService ) { }

  ngOnInit() {
    this.products = this.ProductService.returnProducts();
  }

  onSelect(ProductModel: ProductModel) {
    this.selectedProduct = ProductModel;
  }
}