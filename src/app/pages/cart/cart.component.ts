import { Component, OnInit } from '@angular/core';
import { IITem } from 'src/app/models/IItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalItems: number;
  totalPrice: number;
  items: IITem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.Init();
  }

  Init() {
    this.items = this.cartService.getCartItems();
    this.totalItems = this.cartService.getTotalItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  RefreshItems(): void {
    this.Init();
  }
}
