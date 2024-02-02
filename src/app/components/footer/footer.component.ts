import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'bq-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public menuItems: MenuItem[] = [
    {
      icon: '_icon-home',
      path: '',
    },
    {
      icon: '_icon-explore',
      path: '/explore',
    },
    {
      icon: '_icon-cart',
      path: '/cart',
    },
  ];
}
