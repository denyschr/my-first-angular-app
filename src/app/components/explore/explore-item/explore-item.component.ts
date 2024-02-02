import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../models/restaurant.model';

@Component({
  selector: 'bq-explore-item',
  templateUrl: './explore-item.component.html',
  styleUrl: './explore-item.component.scss',
})
export class ExploreItemComponent {
  @Input() restaurant: Restaurant;
}
