import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl:'book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  bookPage = '2.3.html'
  bookContent: SafeHtml; 
  //@ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private http: HttpClient,
    private domSanitizer: DomSanitizer ) { 
    this.http
      .get( `assets/templates/book/${this.bookPage}`,
          { responseType: 'text' })
          .subscribe(data => { 
            this.bookContent = data;// this.domSanitizer.bypassSecurityTrustHtml(data);
          });
  }

  ngOnInit() {
  }
}


