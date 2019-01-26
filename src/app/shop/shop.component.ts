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

  products: Product[] = [
    new Product("Furry Catnip Pillow", 9, "Our most popular fabric 12 inches of fun", 1),
    new Product("Upholstery catnip Body Pillow", 9, "This is the fancy version of our Catnip Body Pillow. High-end, tougher materials for cats who are rougher on things.", 2),
    new Product("Big Diddy Pillow", 14, "24 inches of BIG catnip fun, 3/4 cup of our fresh Catnip inside. Definitely for the bigger kitty. Please specify furry or upholstery fabric", 3),
    new Product("Catnip Luv Muffin", 10, "A fantastic wonky shape that has great movement, made from our scrap fabric with 1/4 cup of catnip 2 pillows for 10.00 WOOHOO recycled!!", 4),
    new Product("Refillable Catnip Body Pillow", 13, "This is the refill version of our Catnip Body Pillow. They are made from high-end upholstery fabrics, with a gather at the top that is tied with a furry strip of fabric. They have the same amount of catnip as our most popular Body Pillow size,  but can be opened up to be washed and refilled. Upholstery colors vary, we'll surprise you", 5),
    new Product("Organic Loose Catnip 1/2 Oz", 7, "We are finally able to offer up our Organic loose Catnip. It is cut and sifted, human-grade, and a 1/2 ounce paper bowl sells for 7.00", 6),
    new Product("Carrot of Joy and Happiness", 11, "Our new refillable style pillow, in our super popular carrot style. It has a bow at the top that you can untie, so that you can add more catnip, and empty it out to wash it.", 7),
  ]

  goToDetailPage(clickedProduct: Product) {
    this.router.navigate(['products', clickedProduct.id])
  }

}
