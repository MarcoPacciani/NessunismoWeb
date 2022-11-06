import { Component, EventEmitter } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titlee:string = 'NessunismoWeb';

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('it');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('it');
  }

  getitle(title:any): void {
    //this.titlee = title;
    console.log(this.titlee);
  }
}
