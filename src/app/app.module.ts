import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsComponent } from './forms/forms.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LocationComponent } from './location/location.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DisplayComponent } from './display/display.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    LocationComponent,
    FrontpageComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
