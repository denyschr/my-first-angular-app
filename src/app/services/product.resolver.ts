import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';

import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

export const productResolver: ResolveFn<Product> = (
  route: ActivatedRouteSnapshot
) => {
  const productsService = inject(ProductsService);
  const router = inject(Router);

  return productsService.getProduct(route.params?.['id']).pipe(
    catchError(() => {
      router.navigate(['category']);
      return EMPTY;
    })
  );
};
