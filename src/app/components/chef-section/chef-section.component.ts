import { Component } from '@angular/core';
import images from '@constants/images';

@Component({
  selector: 'app-chef-section',
  templateUrl: './chef-section.component.html',
  styleUrls: ['./chef-section.component.scss']
})
export class ChefSectionComponent {
  public images = images;
}
