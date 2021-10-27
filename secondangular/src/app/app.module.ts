import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstComponent } from './inst/inst.component';
import { FormsModule } from '@angular/forms';
import { InstlistComponent } from './instlist/instlist.component';

@NgModule({
  declarations: [
    AppComponent,
    InstComponent,
    InstlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
