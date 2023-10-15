import { Component } from '@angular/core';
import images from '@constants/images';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpened: boolean = false;
  images = images;


showBurgerMeu(isClosed: boolean) {
this.isMenuOpened = isClosed ? false : true;
}

}
