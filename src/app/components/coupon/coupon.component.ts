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

  code: string;

  constructor(private cartService: CartService) {}

  setDiscount() {
    const discount = parseInt(this.code);
    this.cartService.setDiscount(discount);
    this.summary.GetDiscount();
  }
}
