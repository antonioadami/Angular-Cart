import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IITem } from 'src/app/models/IItem';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalItems: number;
  totalPrice: number;
  items: IITem[] = [];

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

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

  Checkout() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
