import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../model/product.model';
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
  public productIndexUnderEditing: number = null;

  constructor(private store: Store<fromProducts.AppState>) { }

  ngOnInit(): void {
    this.store.select('products').subscribe(data => {
      this.products = data.products;
    });

    this.getProducts();
  }

  getProducts(): void {
    this.store.dispatch(new productActions.GetProducts());
  }

  addProduct(id: number, name: string, price: number): void {
    const newProduct = new Product(id, name, price);

    this.store.dispatch(new productActions.AddProduct(newProduct));

    this.isAddingNewProduct = false;
  }

  deleteProduct(productId: number): void {
    alert("The product has been deleted");

    this.store.dispatch(new productActions.DeleteProduct(productId));
  }

  updateProduct(id: number, name: string, price: number): void {
    const updatedProduct = new Product(id, name, price);

    this.store.dispatch(new productActions.UpdateProduct(updatedProduct));

    this.productIndexUnderEditing = -1;
  }
}
