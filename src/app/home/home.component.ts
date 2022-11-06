import {Component, Inject, OnInit} from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { voiceTolbar } from './interface';
import {DOCUMENT} from "@angular/common";
import 'leader-line';
import {ActivatedRoute, Router} from "@angular/router";
declare let LeaderLine: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(2000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public showSector: boolean = false;
  private line:any = [];

  public listVoiceToolbar:voiceTolbar[] = [
    {description: "Nessuno Produce", active:false, id:"button1", url:"eCommerce"},
    {description: "Nessuno Stile", active:false, id:"button2", url:"stile"},
    {description: "Nessuno Managmet", active:false, id:"button3", url:"video"},
    {description: "N.A.S.O.", active:false, id:"button4", url:"naso"},
  ]
  constructor(@Inject(DOCUMENT) private document:any,
              private _route: ActivatedRoute,
              private _router:Router) { }

  animationEnd(): void {
    this.showSector = true;
  }

  createLine(id:string): void {
    const item = new LeaderLine(
      this.document.getElementById('start'),
      this.document.getElementById(id),
      {color: 'black',startSocket: 'bottom', endSocket: 'top', dash: {animation: true}}
    );
    this.line.push(item);
  }

  goToPage(url:string): void {
    this.showSector = false;
    this.line.forEach((lineItem:any) => {
      lineItem.remove();
    });
    if(url === "eCommerce"){
      this.document.location.href = 'https://nessunismo.com';

    } else {
      this._router.navigate([url]);
    }

  }


  ngOnInit(): void {

  }
}
