import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bq-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrl: './category-nav.component.scss',
})
export class CategoryNavComponent {
  public categoryItems: string[] = [
    'All',
    'Pizza',
    'Burger',
    'Biryani',
    'Salad',
  ];

  public categoryActive = 'All';

  @Output() searchedCategory = new EventEmitter<string>();

  public onFilter(category: string) {
    this.categoryActive = category;
    this.searchedCategory.emit(category);
  }
}
