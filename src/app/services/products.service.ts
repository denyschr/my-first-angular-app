import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public readonly URI_PRODUCTS = 'http://localhost:3000/products';
  public readonly URI_CART = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<Product[]>(this.URI_PRODUCTS);
  }

  public getProduct(id: number) {
    return this.http.get<Product>(`${this.URI_PRODUCTS}/${id}`);
  }

  public postProductToCart(product: Product) {
    return this.http.post<Product>(this.URI_CART, product);
  }

  public getProductsFromCart() {
    return this.http.get<Product[]>(this.URI_CART);
  }

  public updateProductToCart(product: Product) {
    return this.http.put<Product>(`${this.URI_CART}/${product.id}`, product);
  }

  public removeProductFromCart(id: number) {
    return this.http.delete<any>(`${this.URI_CART}/${id}`);
  }
}
