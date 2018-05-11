import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReportAppComponent } from './report-app.component';

@NgModule({
  declarations: [
    ReportAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ReportAppComponent]
})
export class AppModule { }
