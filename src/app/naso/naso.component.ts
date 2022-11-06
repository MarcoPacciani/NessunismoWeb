import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from "swiper";

// import Swiper core and required modules
import SwiperCore, { Pagination,Keyboard,Mousewheel,EffectFade } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination,Keyboard,Mousewheel,EffectFade]);

@Component({
  selector: 'app-naso',
  templateUrl: './naso.component.html',
  styleUrls: ['./naso.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NasoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      clickable: true
    },
    speed: 500,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  }


}
