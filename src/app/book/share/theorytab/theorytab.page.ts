import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'theorytab',
  templateUrl: './theorytab.page.html',
  styleUrls: ['./theorytab.page.scss'],
})
export class TheorytabPage implements OnInit {
  @Input('video-path') videoPath: string;
  @Input('tab-id') tabId: string;
  @Input('url-vars') urlVars: string;
  androidApp = false; 
  iosApp = true;
  webApp = true;
  flash = false;
  src = '';
  poster = '';
  type = '';

  constructor() { 
  }

  ngOnInit() {
    this.onInit();
  }

  onInit(){
    this.androidApp = false; 
    //uses HTML5 video stored locally
    this.iosApp = true;

    //uses HTML5 video stored on AWS
    this.webApp = true;

    //use Flash Theorytabs
    this.flash = false;
    let root = '';

    if (this.androidApp) {  
      let root = "video/";
      this.src = `${root}'mp4/'${this.videoPath}.mp4`;
      this.poster = `${root}poster/png-watermark-256r50/${this.videoPath}.png`;
    } 
    if (this.iosApp) 
    {
      // Local HTML5 <video>
      root = "video/";
      this.poster = `${root}poster/png/'${this.videoPath}.png`;
      this.src = `${root}mp4/${this.videoPath}.mp4`;
      this.type = 'video/mp4';
    }
				
    if (this.webApp)
    {
      // S3 HTML5 <video>
      root = "https://s3.amazonaws.com/i.hooktheory.com/video/"
      // LOCAL
      //root = "video/";
      this.poster = `${root}poster/png/${this.videoPath}.png`;
      this.src = `${root}mp4/${this.videoPath}.mp4`;
      this.type = 'video/mp4';
    }	

  }
  
  onClick(){
    //playVideoCnanders(this.src);
  }		

}
