import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IChangeAmount } from 'src/models/IChangeAmount';
import { IITem } from 'src/models/IItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: IITem;
  @Output() changeAmount = new EventEmitter<IChangeAmount>();

  faTrash = faTrash;
  faPlus = faPlus;

  amountItems = [...Array(13).keys()].filter((amount) => amount !== 0);
  selectedAmount = 1;

  AddItem(id: number) {
    this.changeAmount.emit({ id, amount: 1 });
  }

  RemoveItem(id: number) {
    this.changeAmount.emit({ id, amount: 0 });
  }

  AmountChanged(id: number, event: MatSelectChange) {
    this.changeAmount.emit({ id, amount: event.value });
    this.selectedAmount = 1;
  }
}
