import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'bq-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss', '../header/header.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public productsSubscription: Subscription;
  public sortedProducts: Product[] = [];

  constructor(private ProductsService: ProductsService) {}

  public ngOnInit(): void {
    this.productsSubscription = this.ProductsService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.sortedProducts = data;
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }

  public onSearch(eventData: string) {
    this.sortedProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(eventData.toLowerCase())
    );
  }

  public onFilter(eventData: string) {
    if (eventData.toLowerCase() === 'all') {
      this.sortedProducts = this.products;
    } else {
      this.sortedProducts = this.products.filter((product) =>
        product.category.toLowerCase().includes(eventData.toLowerCase())
      );
    }
  }
}
