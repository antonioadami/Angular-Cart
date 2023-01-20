import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IITem } from 'src/app/models/IItem';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-cart-button',
  templateUrl: './add-cart-button.component.html',
  styleUrls: ['./add-cart-button.component.scss']
})
export class AddCartButtonComponent {
  @Input() productId: number;
  @Input() amount: number;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private router: Router
  ) {}

  addToCart() {
    const product = this.productsService.getProductById(this.productId);

    if (!product) {
      return;
    }

    const item: IITem = {
      product,
      amount: this.amount,
      totalPrice: this.amount * product.price.value
    };

    this.cartService.addItem(item);

    this.router.navigate(['cart']);
  }
}
