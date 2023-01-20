import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ItemImageComponent } from './item-image/item-image.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ItemComponent,
    ItemImageComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatGridListModule,
    NgbCarouselModule,
    MatButtonModule
  ],
  exports: [
    ItemComponent,
    NavbarComponent,
    CarouselComponent,
    ProductListComponent
  ]
})
export class ComponentsModule {}
