import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-details-infos',
  templateUrl: './details-infos.component.html',
  styleUrls: ['./details-infos.component.scss']
})
export class DetailsInfosComponent {
  @Input() product: IProduct;

  selectedAmount = 1;
  amountItems = [...Array(13).keys()].filter((amount) => amount !== 0);
}
