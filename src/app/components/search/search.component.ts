import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'bq-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() products: Product[];
  @Output() searchedValue = new EventEmitter<string>();
  public searchValue: string = '';

  public onSearch(e: KeyboardEvent) {
    const keyValue = e.key;
    if (keyValue === 'Enter') {
      this.searchedValue.emit(this.searchValue);
    }
  }
}
