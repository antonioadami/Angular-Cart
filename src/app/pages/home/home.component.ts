import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products.products));
  }

  SearchString(search: string) {
    this.productsService
      .getProductsByName(search)
      .subscribe((products) => (this.products = products.products));
  }
}
