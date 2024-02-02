import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { Subscription } from 'rxjs';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'bq-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss', '../header/header.component.scss'],
})
export class ExploreComponent implements OnInit, OnDestroy {
  public restaurants: Restaurant[] = [];
  public restaurantsSubscription: Subscription;

  constructor(private RestaurantsService: RestaurantsService) {}

  public ngOnInit(): void {
    this.restaurantsSubscription =
      this.RestaurantsService.getRestaurants().subscribe((data) => {
        this.restaurants = data;
      });
  }

  public ngOnDestroy(): void {
    if (this.restaurantsSubscription)
      this.restaurantsSubscription.unsubscribe();
  }
}
