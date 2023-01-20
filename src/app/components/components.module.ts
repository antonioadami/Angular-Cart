import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';

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
import { NgxMaskModule } from 'ngx-mask';

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
    CardFormComponent
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
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ItemComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent,
    DetailsImageComponent,
    DetailsInfosComponent,
    CardFormComponent
  ]
})
export class ComponentsModule {}
