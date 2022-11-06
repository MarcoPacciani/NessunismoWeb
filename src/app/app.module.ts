import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { NasoComponent } from './naso/naso.component';
import { NessunoStileComponent } from './nessuno-stile/nessuno-stile.component';
import { ManagmentComponent } from './managment/managment.component';
import { environment } from 'src/environments/environment.prod';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NasoComponent,
    NessunoStileComponent,
    ManagmentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        SwiperModule,
        BrowserAnimationsModule,
        MaterialModule,
        TranslateModule.forRoot({
          defaultLanguage: 'it',
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
