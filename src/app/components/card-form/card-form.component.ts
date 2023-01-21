import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: 'card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  @Output() validate = new EventEmitter<boolean>();

  cardFormGroup = new FormGroup({
    number: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required])
  });

  Validate() {
    this.validate.emit(this.cardFormGroup.valid);
  }
}
