import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
  @Input()
  summary: SummaryComponent;

  coupon: string;

  constructor(private cartService: CartService) {}

  setDiscount() {
    const discount = this.coupon;
    this.cartService.setDiscount(discount);
    this.summary.GetDiscount();
  }
}
