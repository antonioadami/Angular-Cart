import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  AddItem(id: number) {
    this.changeAmount.emit({ id, amount: 1 });
  }

  RemoveItem(id: number) {
    this.changeAmount.emit({ id, amount: 0 });
  }
}
