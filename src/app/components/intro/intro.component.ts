import { Component, OnInit } from '@angular/core';
declare var GLightbox: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.initGLightbox();
  }

  private initGLightbox(): void {
    GLightbox({
      'touchNavigation': true,
      'href': 'https://www.youtube.com/watch?v=1VaZLn3_ADQ',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube or local
      'width': 900,
      'autoPlayVideos': 'true',
    });
  }

}
