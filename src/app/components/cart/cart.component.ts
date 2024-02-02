import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription, toArray } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'df-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss', '../header/header.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  public cart: Product[] = [];
  public cartSubscription: Subscription;

  public subTotal = 0;
  public discount = 0;
  public total = 0;

  constructor(private ProductsService: ProductsService) {}

  public ngOnInit(): void {
    this.cartSubscription =
      this.ProductsService.getProductsFromCart().subscribe((data) => {
        this.cart = data;
        this.calculateCost();
      });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  public calculateCost(): void {
    this.subTotal = 0;
    this.discount = 0;

    this.cart.forEach((product) => {
      this.subTotal += product.price * product.quantity;
      if (product.discountPercentage) {
        this.discount += this.subTotal * (product.discountPercentage / 100);
      }
    });

    this.total = this.subTotal - this.discount;
  }

  public decrementProductFromCart(product: Product) {
    product.quantity--;
    this.ProductsService.updateProductToCart(product).subscribe((data) => {});
    this.calculateCost();
  }

  public incrementProductFromCart(product: Product) {
    product.quantity++;
    this.ProductsService.updateProductToCart(product).subscribe((data) => {});
    this.calculateCost();
  }

  public removeProductFromCart(product: Product) {
    this.ProductsService.removeProductFromCart(product.id).subscribe(() => {
      let index = this.cart.findIndex((data) => data.id === product.id);
      this.cart.splice(index, 1);
      this.calculateCost();
    });
  }
}
