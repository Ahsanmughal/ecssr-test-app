import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements AfterViewInit {

  timelinelist: any;
  timelinecontent: any;
  selectedIndex = null;
  constructor(private translateService: TranslateService) { }

  ngAfterViewInit(): void {
    this.translateService.get('timeline').subscribe(resp => {
      this.timelinelist = resp.list;
      this.settimelinedata(this.timelinelist[0],1);
    });
    this.translateService.onLangChange.subscribe((event) => {
      this.timelinelist = event.translations.timeline.list;
      this.settimelinedata(this.timelinelist[0],1);
    });
  }

  settimelinedata(item:any, index:any) {
    this.timelinecontent = item;
    this.selectedIndex = index;
  }

}
