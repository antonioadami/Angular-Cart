import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    DetailsComponent,
    ErrorComponent,
    CheckoutComponent,
    ConfirmationComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatButtonModule
  ],
  exports: []
})
export class PagesModule {}
