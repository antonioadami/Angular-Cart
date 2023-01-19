import { Component, OnInit } from '@angular/core';
import { IChangeAmount } from 'src/app/models/IChangeAmount';
import { IITem } from 'src/app/models/IItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalItems: number;
  totalPrice: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    this.totalItems = this.cartService.getTotalItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  items: IITem[] = [];

  ChangeAmount(data: IChangeAmount) {
    this.items = this.cartService.changeAmount(data);
  }
}
