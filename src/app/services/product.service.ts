import { Injectable } from '@angular/core';
import { ProductModel } from './../shared/product-model';
import { ProductItems } from './../shared/productitems';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/ProductItems';

  constructor(private http: HttpClient) { }

  returnProducts(): ProductModel[] {
  return ProductItems;
  }

  returnProduct(id: string): ProductModel {
    return ProductItems.filter(product => product.id === id)[0];
  }
}
