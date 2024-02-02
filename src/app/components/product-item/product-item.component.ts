import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Subscription, find } from 'rxjs';

@Component({
  selector: 'bq-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit, OnDestroy {
  public productsSubscription: Subscription;

  public cart: Product[];
  public cartSubscription: Subscription;

  constructor(private ProductsService: ProductsService) {}

  @Input() product: Product;

  public ngOnInit(): void {
    this.cartSubscription =
      this.ProductsService.getProductsFromCart().subscribe((data) => {
        this.cart = data;
      });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  public addToCart(product: Product) {
    product.quantity = 1;
    let findItem;

    if (this.cart.length > 0) {
      findItem = this.cart.find((item) => item.id === product.id);
      if (findItem) this.updateToCart(findItem);
      else this.postToCart(product);
    } else this.postToCart(product);
  }

  public postToCart(product: Product) {
    this.ProductsService.postProductToCart(product).subscribe((data) =>
      this.cart.push(data)
    );
  }

  public updateToCart(product: Product) {
    product.quantity += 1;
    this.ProductsService.updateProductToCart(product).subscribe((data) => {});
  }
}
