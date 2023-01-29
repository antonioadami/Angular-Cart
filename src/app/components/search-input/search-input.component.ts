import { Component, EventEmitter, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  searchInput = '';

  @Output() searchString = new EventEmitter<string>();

  Submit() {
    this.searchString.emit(this.searchInput);
  }
}
