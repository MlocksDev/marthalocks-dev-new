import { Component, OnInit } from '@angular/core';
declare var GLightbox: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.initGLightbox();
  }

  private initGLightbox(): void {
    GLightbox({
      'touchNavigation': true,
      'href': 'https://www.youtube.com/watch?v=J9lS14nM1xg',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube or local
      'width': 900,
      'autoPlayVideos': 'true',
    });
  }

}
