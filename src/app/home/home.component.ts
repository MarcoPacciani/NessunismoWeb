import { Component, OnInit } from '@angular/core';

import { voiceTolbar } from './interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showSector: boolean = false;

  public listVoiceToolbar:voiceTolbar[] = [
    {description: "Nessuno Produce", active:false},
    {description: "Nessuno Stile", active:false,},
    {description: "Nessuno Managmet", active:false,},
    {description: "N.A.S.O.", active:false,},
  ]
  constructor() { }

  ngOnInit(): void {

  }

  public onMetadata(video:any) {
    this.showSectorNessunismo(video.duration);
  }


  private showSectorNessunismo(duration:number){
    const timeMilliSecond: number = duration * 1000;
    setTimeout(() => {
      this.showSector = true;
    }, timeMilliSecond);
  } 
}
