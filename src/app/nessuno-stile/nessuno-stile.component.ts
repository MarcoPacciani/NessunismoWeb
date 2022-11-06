import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-nessuno-stile',
  templateUrl: './nessuno-stile.component.html',
  styleUrls: ['./nessuno-stile.component.scss']
})
export class NessunoStileComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:any) { }

  ngOnInit(): void {
  }

}
