import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMaskModule } from 'ngx-mask';

import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

import { ItemImageComponent } from './item-image/item-image.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { DetailsImageComponent } from './details-image/details-image.component';
import { DetailsInfosComponent } from './details-infos/details-infos.component';
import { AddCartButtonComponent } from './add-cart-button/add-cart-button.component';
import { CardFormComponent } from './card-form/card-form.component';
import { SummaryComponent } from './summary/summary.component';
import { CouponComponent } from './coupon/coupon.component';
import { ConfirmationListComponent } from './confirmation-list/confirmation-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';
import { AdminProductItemComponent } from './admin-product-item/admin-product-item.component';

@NgModule({
  declarations: [
    ItemComponent,
    ItemImageComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent,
    ProductComponent,
    DetailsImageComponent,
    DetailsInfosComponent,
    AddCartButtonComponent,
    CardFormComponent,
    SummaryComponent,
    CouponComponent,
    ConfirmationListComponent,
    LoginFormComponent,
    FooterComponent,
    SearchInputComponent,
    RegisterFormComponent,
    AdminProductsListComponent,
    AdminProductItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatGridListModule,
    NgbCarouselModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ItemComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent,
    DetailsImageComponent,
    DetailsInfosComponent,
    CardFormComponent,
    SummaryComponent,
    CouponComponent,
    ConfirmationListComponent,
    LoginFormComponent,
    FooterComponent,
    SearchInputComponent,
    RegisterFormComponent,
    AdminProductsListComponent
  ]
})
export class ComponentsModule {}
