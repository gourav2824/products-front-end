import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import * as productActions from './store/product.actions';
import * as fromProducts from './store/product.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public isAddingNewProduct: boolean = false;
  public productIndexUnderEditing: number = -1;

  constructor(private productService: ProductService, private store: Store<{ products: fromProducts.State }>) { }

  ngOnInit(): void {
    // this.getProducts();
    this.store.select('products').subscribe(data => {
      this.products = data.products;
    });
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  addProduct(id: number, name: String, price: number): void {
    const newProduct = new Product(id, name, price);

    // this.productService.addProduct(newProduct).subscribe(response => {
    //   this.getProducts();
    // });

    this.store.dispatch(new productActions.AddProduct(newProduct));

    this.isAddingNewProduct = false;
  }

  deleteProduct(productId: number): void {
    alert("The product has been deleted");

    // this.productService.deleteProduct(productId).subscribe(response => {
    //   this.getProducts();
    // });

    this.store.dispatch(new productActions.DeleteProduct(productId));
  }

  updateProduct(id: number, name: String, price: number): void {
    const updatedProduct = new Product(id, name, price);

    // this.productService.updateProduct(updatedProduct).subscribe(response => {
    //   this.getProducts();
    // });

    this.store.dispatch(new productActions.UpdateProduct(updatedProduct));

    this.productIndexUnderEditing = -1;
  }
}
