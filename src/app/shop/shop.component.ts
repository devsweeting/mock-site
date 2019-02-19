import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductService]
})
export class ShopComponent implements OnInit {

  products: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private productService: ProductService) {}

  // products: Product[];

  ngOnInit() {
    this.products = this.productService.getProducts();
    // console.log(this.router.url);
  }

  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key])
  };

}
