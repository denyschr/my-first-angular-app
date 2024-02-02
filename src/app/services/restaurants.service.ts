import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  public readonly URI_RESTAURANTS = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get<Restaurant[]>(this.URI_RESTAURANTS);
  }
}
