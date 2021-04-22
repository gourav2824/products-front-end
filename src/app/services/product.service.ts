import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private originUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.originUrl);
  }

  addProduct(newProduct: Product) {
    return this.http.post<Product[]>(this.originUrl, newProduct);
  }
}
