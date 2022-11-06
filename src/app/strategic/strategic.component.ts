import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-strategic',
  templateUrl: './strategic.component.html',
  styleUrls: ['./strategic.component.css']
})
export class StrategicComponent implements OnInit {
  @ViewChild("strategicslickModal") strategicslickModal: SlickCarouselComponent;

  strategiclist: any = [
    {img: '../../assets/images/uni1.png'},
    {img: '../../assets/images/uni2.png'},
    {img: '../../assets/images/uni3.png'},
    {img: '../../assets/images/uni4.png'},
    {img: '../../assets/images/uni1.png'},
    {img: '../../assets/images/uni2.png'},

  ];

  strategicslideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2, arrows: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2,arrows: true},
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true},
      },
      {
        breakpoint: 360,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true},
      },
    ],
  };
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.translateService.onLangChange.subscribe((event) => {
      setTimeout(()=> {
      this.strategicslickModal.unslick();
      if(event.lang === 'en') {
        this.strategicslideConfig.rtl = false;
      } else {
        this.strategicslideConfig.rtl = true;
      }

        if (!this.strategicslickModal.initialized) {
          this.strategicslickModal.initSlick();
        }
      },100);
      
    });

  }

}
