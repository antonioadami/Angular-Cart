import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  listType = 'products';

  onChange($event: MatButtonToggleChange) {
    this.listType = $event.value;
  }
}
