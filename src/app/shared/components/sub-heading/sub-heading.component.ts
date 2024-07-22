import { Component, Input } from '@angular/core';
import images from '@constants/images';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})
export class SubHeadingComponent {

  public images = images;
  @Input() title: string = 'Experience Seafood Perfection';
}
