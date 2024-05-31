import { AfterViewInit, Component, Input } from '@angular/core';
import Swiper from 'swiper';

import { SwiperContainer, register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  @Input() options = [
    { icon: 'check.svg', label: '30-DAY SATISFACTION GUARANTEE' },
    { icon: 'car.svg', label: 'Free delivery on orders over $40.00' },
    { icon: 'heart.svg', label: '50.000+ HAPPY CUSTOMERS' },
    { icon: 'checkReload.svg', label: '100% Money Back Guarantee' },
  ];
  swiper: any = null;
  ngAfterViewInit(): void {
    /* const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: any = {
      slidesPerView: 'auto',
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    };
    Object.assign(swiperElementConstructor!, swiperOptions); */

    this.swiper = new Swiper('.my-swiper', {
      navigation: {
        nextEl: '.prueba',
        prevEl: '.prueba',
      },
      slidesPerView: 4,
    });
    console.log(this.swiper);
  }

  buttonSlide() {
    this.swiper.slideNext();
  }
}
