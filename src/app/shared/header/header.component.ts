import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import { animate, state, style, transition, trigger} from '@angular/animations';
import { AfterViewInit,  HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 1800px;
      }
    `
  ],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private isVisible = true;
  defaultlang: string = 'ar';
  constructor(private translateService: TranslateService,  @Inject(DOCUMENT) private document: Document) { }

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngOnInit(): void {
    this.translateService.addLangs(['en', 'ar']);
    this.translateService.setDefaultLang('ar');
    this.changeLangage('ar');
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }

  changeLangage(lang: string) {
    const htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    htmlTag.lang = lang;
    this.translateService.use(lang);
    this.defaultlang = lang;
  }

}
