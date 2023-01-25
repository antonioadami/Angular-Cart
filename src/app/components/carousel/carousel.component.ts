import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getBannerProducts()
      .subscribe((products) => (this.products = products.products));
  }
}
