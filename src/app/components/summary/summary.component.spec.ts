// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDividerModule } from '@angular/material/divider';

// import { SummaryComponent } from './summary.component';
// import { CartService } from 'src/app/services/cart.service';
// import { ProductsService } from 'src/app/services/products.service';
// import { IProduct } from 'src/app/models/IProduct';

// describe('SummaryComponent', () => {
//   let component: SummaryComponent;
//   let fixture: ComponentFixture<SummaryComponent>;

//   let cartService: CartService;
//   let productsService: ProductsService;
//   let product: IProduct;

//   let amount: number;
//   let totalPrice: number;
//   let coupon: string;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [SummaryComponent],
//       imports: [MatDividerModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(SummaryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//     cartService = TestBed.inject(CartService);

//     productsService = new ProductsService();
//     product = productsService.getProductById(1) as IProduct;

//     amount = 3;
//     totalPrice = product.price.value * amount;
//     coupon = 'discount 10';
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should show totalItems', () => {
//     cartService.addItem({
//       amount,
//       product,
//       totalPrice
//     });

//     component.GetData();

//     expect(component.totalItems).toBe(amount);
//   });

//   it('should show totalPrice', () => {
//     cartService.addItem({
//       amount,
//       product,
//       totalPrice
//     });

//     component.GetData();

//     expect(component.totalPrice).toBe(totalPrice);
//   });

//   it('should show discount', () => {
//     cartService.addItem({
//       amount,
//       product,
//       totalPrice
//     });

//     cartService.setDiscount(coupon);

//     component.GetData();

//     expect(component.discount.percentage).toBe(10);
//   });
// });
