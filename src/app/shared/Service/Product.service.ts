// src/app/shared/Service/Product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Direct URL, as per your request.
  private apiUrl = 'http://192.168.154.130:8089/projet/produit';

  constructor(private http: HttpClient) {}

  // Get all products (API "/list-products")
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/retrieve-all-produits`);
  }

  // Add a new product (API "/add-produit")
  addProduct(product: Product): Observable<Product> {
    // We POST the product data to the backend to add the product.
    return this.http.post<Product>(`${this.apiUrl}/add-produit`, product);
  }
  
  // Edit a product
  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/update-produit/${product.idProduit}`, product);
  }

  // Delete a product
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-produit/${productId}`);
  }
}
