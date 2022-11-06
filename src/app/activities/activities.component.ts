import { Component, OnInit,ViewChild } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  @ViewChild("slickModal") slickModal: SlickCarouselComponent;

  slides = [
    { img: '../../assets/images/activity1.png' },
    { img: '../../assets/images/activity2.png' },
    { img: '../../assets/images/activity3.png' },
    { img: '../../assets/images/activity4.png' },
    { img: '../../assets/images/activity1.png' },
  ];


  slideConfig = { 
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: true, prevArrow: false,nextArrow: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2,dots: true, prevArrow: false,nextArrow: false},
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, prevArrow: false,nextArrow: false},
      },
      {
        breakpoint: 360,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, prevArrow: false,nextArrow: false},
      },
    ],
  };
  
  
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event) => {
      this.slickModal.unslick()      
      if(event.lang === 'en') {
        this.slideConfig.rtl = false;
      } else {
        this.slideConfig.rtl = true;
      }
      setTimeout(()=> {
        if (!this.slickModal.initialized) {
          this.slickModal.initSlick();
        }
      },100);
    });
  }

}
