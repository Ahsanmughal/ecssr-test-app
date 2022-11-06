import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SlickCarouselComponent } from "ngx-slick-carousel";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements AfterViewInit {
  @ViewChild("feedbackslickModal") feedbackslickModal: SlickCarouselComponent;

  feedbacklist: any;
  feedbackslideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    rtl: true,
  };
  
  constructor(private translateService: TranslateService) { }

  ngAfterViewInit(): void {
    this.translateService.get('feedback').subscribe(resp => {
      this.feedbacklist = resp.profile;
    });

    this.translateService.onLangChange.subscribe((event) => {
      this.feedbacklist = event.translations.feedback.profile;
      this.feedbackslickModal.unslick();
      if(event.lang === 'en') {
        this.feedbackslideConfig.rtl = false;
      } else {
        this.feedbackslideConfig.rtl = true;
      }
      setTimeout(()=> {
        if (!this.feedbackslickModal.initialized) {
          this.feedbackslickModal.initSlick();
        }
      },100);
      
    });

  }




}
