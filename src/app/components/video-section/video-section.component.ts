import { Component, Directive, ElementRef } from '@angular/core';
import video from '@constants/index';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})

export class VideoSectionComponent {
  meal = video.meal;
  nsuomNamVideo = video.nsuomNamVideo;
  playVideo: boolean = false;

  handleVideo(){}
}
