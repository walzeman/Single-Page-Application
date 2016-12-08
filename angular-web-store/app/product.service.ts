import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  getHeroes(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getHero(id: number): Promise<Product> {
    return this.getHeroes()
      .then(products => products.find(product => product.id === id));
  }

}

