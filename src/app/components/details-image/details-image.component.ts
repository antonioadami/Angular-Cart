import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-image',
  templateUrl: './details-image.component.html',
  styleUrls: ['./details-image.component.scss']
})
export class DetailsImageComponent {
  @Input() url: string;
  @Input() alt: string;
}
