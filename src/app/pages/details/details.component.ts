import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');

    if (!id) {
      return;
    }

    this.productsService
      .getProductById(parseInt(id))
      .subscribe((product) => (this.product = product));
  }
}
