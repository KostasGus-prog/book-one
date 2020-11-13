import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro-page',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
 
  isAndroid: true;
  fireos = false; 
  android = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  

  constructor() { }

  ngOnInit() {
  }

}
