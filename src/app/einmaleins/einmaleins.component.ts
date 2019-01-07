import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'einmaleins',
  templateUrl: './einmaleins.component.html',
  styleUrls: ['./einmaleins.component.scss']
})
export class EinmaleinsComponent implements OnInit {

  faktor1 : number = 5;
  faktor2 : number = 7;
  ergebnis : number;

  constructor() { }

  ngOnInit() {
  }

}
