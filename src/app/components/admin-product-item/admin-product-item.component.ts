import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.scss']
})
export class AdminProductItemComponent {
  @Input() product: IProduct;
}
