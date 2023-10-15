import { Component } from '@angular/core';
import images from '@constants/images';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  images = images;

}
