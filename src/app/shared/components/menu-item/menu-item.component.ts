import { Component, Input } from '@angular/core';
import data from '@constants/data';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  public starterMenu = data.starters;
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() tag: string = '';
}
