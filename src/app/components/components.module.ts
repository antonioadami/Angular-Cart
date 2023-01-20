import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ItemImageComponent } from './item-image/item-image.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ItemComponent,
    ItemImageComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    NgbCarouselModule
  ],
  exports: [ItemComponent, NavbarComponent, CarouselComponent]
})
export class ComponentsModule {}
