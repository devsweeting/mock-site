import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {

  constructor() {}

    getProducts() {
      return PRODUCTS;
    }

    getProductById(productId: number){
      for (let i = 0; i < PRODUCTS.length; i++) {
        if (PRODUCTS[i].id === productId) {
          return PRODUCTS[i]
        }
      }
    }

}
