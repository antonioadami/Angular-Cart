import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/models/IDiscount';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  totalPrice: number;
  totalItems: number;
  discount: IDiscount;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.GetData();
  }

  public GetData() {
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalItems = this.cartService.getTotalItems();
    this.discount = this.cartService.getDiscount();
  }
}
