import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { BookPageRoutingModule } from './book-routing.module';

import { BookPage } from './book.page';
import { TheorytabPage } from './share/theorytab/theorytab.page';
import { KeySelectorPage } from './templates/key-selector/key-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPageRoutingModule,
    HttpClientModule
  ],
  declarations: 
    [BookPage, 
      TheorytabPage, 
      KeySelectorPage
    ]
})
export class BookPageModule {
}
