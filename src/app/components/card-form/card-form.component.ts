import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: 'card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  cardFormGroup = new FormGroup({
    number: new FormControl(''),
    name: new FormControl(''),
    cvv: new FormControl(''),
    dueDate: new FormControl('')
  });
}
