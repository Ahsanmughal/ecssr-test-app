import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NodeComponent } from './node/node.component';
import { HomeComponent } from './home/home.component';
import { IntellactualComponent } from './intellactual/intellactual.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ThinkersComponent } from './thinkers/thinkers.component';
import { ActivitiesComponent } from './activities/activities.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StrategicComponent } from './strategic/strategic.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NodeComponent,
    HomeComponent,
    IntellactualComponent,
    TimelineComponent,
    ThinkersComponent,
    ActivitiesComponent,
    FeedbackComponent,
    StrategicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
