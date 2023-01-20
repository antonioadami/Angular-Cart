import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIdGuard } from './guards/product-id.guard';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'details',
    component: DetailsComponent,
    canActivate: [ProductIdGuard]
  },
  { path: 'cart', component: CartComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
