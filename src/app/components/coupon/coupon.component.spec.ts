import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SummaryComponent } from '../summary/summary.component';
import { CouponComponent } from './coupon.component';
import { CartService } from 'src/app/services/cart.service';

describe('CouponComponent', () => {
  let component: CouponComponent;
  let summary: SummaryComponent;
  let fixture: ComponentFixture<CouponComponent>;
  let fixtureSummary: ComponentFixture<SummaryComponent>;

  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponComponent, SummaryComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureSummary = TestBed.createComponent(SummaryComponent);
    summary = fixtureSummary.componentInstance;
    fixture.detectChanges();

    component.summary = summary;

    cartService = TestBed.inject(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a discount coupon', () => {
    component.coupon = 'discount 10';
    component.setDiscount();

    const discount = cartService.getDiscount();

    expect(discount.percentage).toBe(10);
  });
});
