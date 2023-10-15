import { Component } from '@angular/core';

import images from '@constants/images';
import data from '@constants/data';

@Component({
  selector: 'app-special-menu',
  templateUrl: './special-menu.component.html',
  styleUrls: ['./special-menu.component.scss']
})
export class SpecialMenuComponent {
  public starterMenu = data.starters;
  public images = images;
  public gelatoMenu = data.gelatoes;
}
