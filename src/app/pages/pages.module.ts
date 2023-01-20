import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, CartComponent, DetailsComponent],
  imports: [BrowserModule, CommonModule, ComponentsModule],
  exports: []
})
export class PagesModule {}
