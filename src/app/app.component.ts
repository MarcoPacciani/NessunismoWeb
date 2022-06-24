import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlee:string = 'NessunismoWeb';


  getitle(title:any): void {
    //this.titlee = title;
    console.log(this.titlee);
  }
}
