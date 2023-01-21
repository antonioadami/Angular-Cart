import {
  faCartShopping,
  faRightToBracket,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartAmount: number;

  faCartShopping = faCartShopping;
  faUser = faUser;
  faRightToBracket = faRightToBracket;

  authenticated = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartAmount = this.cartService.getTotalItems();
    this.authService
      .isAuthenticatedObservable()
      .subscribe((a) => (this.authenticated = a));
  }
}
