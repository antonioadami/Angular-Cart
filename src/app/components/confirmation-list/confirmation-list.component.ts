import { Component, OnInit } from '@angular/core';
import { IITem } from 'src/app/models/IItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation-list',
  templateUrl: './confirmation-list.component.html',
  styleUrls: ['./confirmation-list.component.scss']
})
export class ConfirmationListComponent implements OnInit {
  cartItems: IITem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
}
