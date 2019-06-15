import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowNewComponent } from './show-new/show-new.component';
import { ShowEditComponent } from './show-edit/show-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    ShowNewComponent,
    ShowEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
