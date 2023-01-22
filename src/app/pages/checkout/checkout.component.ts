import { Component } from '@angular/core';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  disabled = true;

  DisableButton(event: boolean) {
    this.disabled = !event;
  }
}
