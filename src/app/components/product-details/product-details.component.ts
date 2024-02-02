import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bq-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: [
    './product-details.component.scss',
    '../header/header.component.scss',
  ],
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  public productSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.productSubscription = this.route.data.subscribe((data) => {
      this.product = data['data'];
    });
  }
}
