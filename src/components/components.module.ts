import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ItemImageComponent } from './item-image/item-image.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [ItemComponent, ItemImageComponent, NavbarComponent],
  imports: [BrowserModule, CommonModule, FontAwesomeModule, MatBadgeModule],
  exports: [ItemComponent, NavbarComponent]
})
export class ComponentsModule {}
