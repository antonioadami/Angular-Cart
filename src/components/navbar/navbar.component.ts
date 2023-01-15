import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() cartAmount: number;

  faCartShopping = faCartShopping;
  faUser = faUser;
}
