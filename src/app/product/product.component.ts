import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public isAddingNewProduct: boolean = false;
  public productIndexUnderEditing: number = -1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  addProduct(id: number, name: string, price: number): void {
    const newProduct = new Product(id, name, price);

    this.productService.addProduct(newProduct).subscribe(response => {
      this.getProducts();
    });

    this.isAddingNewProduct = false;
  }

  deleteProduct(productId: number): void {
    alert("The product has been deleted");
    this.productService.deleteProduct(productId).subscribe(response => {
      this.getProducts();
    });
  }

  updateProduct(id: number, name: string, price: number): void {
    const updatedProduct = new Product(id, name, price);

    this.productService.updateProduct(updatedProduct).subscribe(response => {
      this.getProducts();
    });

    this.productIndexUnderEditing = -1;
  }
}
