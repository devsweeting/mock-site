import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submitForm(title: string, price: number, description: string) {
    let newProduct: Product = new Product(title, price, description);
    this.productService.addProduct(newProduct);
  }

}
