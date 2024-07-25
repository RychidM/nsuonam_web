import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SpecialMenuComponent } from './components/special-menu/special-menu.component';
import { SubHeadingComponent } from './shared/components/sub-heading/sub-heading.component';
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';
import { ChefSectionComponent } from './components/chef-section/chef-section.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutUsComponent,
    SpecialMenuComponent,
    SubHeadingComponent,
    MenuItemComponent,
    ChefSectionComponent,
    VideoSectionComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
