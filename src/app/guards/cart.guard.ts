import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  constructor(private router: Router, private cartService: CartService) {}

  canActivate(): boolean {
    if (this.cartService.getTotalItems() === 0) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
