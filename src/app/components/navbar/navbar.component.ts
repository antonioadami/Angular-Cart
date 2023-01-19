import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartAmount: number;

  faCartShopping = faCartShopping;
  faUser = faUser;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartAmount = this.cartService.getTotalItems();
  }
}
