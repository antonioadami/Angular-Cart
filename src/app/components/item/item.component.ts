import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IITem } from 'src/app/models/IItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: IITem;
  @Input() changable = false;
  @Output() refreshItems = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  faTrash = faTrash;
  faPlus = faPlus;

  amountItems = [...Array(13).keys()].filter((amount) => amount !== 0);

  RemoveItem() {
    this.cartService.removeItem(this.item.product.id);
    this.refreshItems.emit();
  }

  AmountChanged(id: number, event: MatSelectChange) {
    this.cartService.changeAmount({ id, amount: event.value });
    this.refreshItems.emit();
  }
}
