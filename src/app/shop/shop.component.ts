import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductService]
})
export class ShopComponent implements OnInit {

  products: FirebaseListObservable<any[]>;

  constructor(private router: Router, private productService: ProductService) {}

  // products: Product[];

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // goToDetailPage(clickedProduct: Product) {
  //   this.router.navigate(['products', clickedProduct.id])
  // };


}
