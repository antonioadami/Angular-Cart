import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent {
  @Input() url = '';
  @Input() alt = '';
}
