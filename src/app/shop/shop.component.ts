import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(private router: Router) {}

  products: Product[];

  goToDetailPage(clickedProduct: Product) {
    this.router.navigate(['products', clickedProduct.id])
  }

}
