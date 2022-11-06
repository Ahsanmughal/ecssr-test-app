import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-thinkers',
  templateUrl: './thinkers.component.html',
  styleUrls: ['./thinkers.component.css']
})
export class ThinkersComponent implements OnInit {

  thinkerlist: any;
  constructor(private translateService: TranslateService) { }


  ngOnInit(): void {
    this.translateService.get('thinkers').subscribe(resp => {
      this.thinkerlist = resp.list;
    });

    this.translateService.onLangChange.subscribe((event) => {
      this.thinkerlist = event.translations.thinkers.list;
    });
  }



}
