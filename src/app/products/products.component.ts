// src/app/products/products.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/Model/Product';  // Import your Product interface/model
import { ProductService } from '../shared/Service/Product.service';  // Import the ProductService

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts: Product[] = [];  // Array to store products fetched from the server
  form: boolean = false;  // To toggle form visibility
  product: Product = new Product();  // Bind product to form fields (used in add and edit)

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  // Fetch all products from the server
  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: Product[]) => {
      this.listProducts = res;
    });
  }

  // Add a new product to the server
  addProduct() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.getAllProducts();  // Refresh the list after adding a product
      this.form = false;  // Hide the form
      this.product = new Product();  // Reset the form
    }, error => {
      console.error('Error adding product:', error);
    });
  }

  // Delete a product
  deleteProduct(idProduct: number | null) {
    if (idProduct !== null) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
        this.getAllProducts();
      }, error => {
        console.error('Error deleting product:', error);
      });
    }
  }

  // Cancel the form and reset
  cancel() {
    this.form = false;
    this.product = new Product();  // Reset the form
  }
}
