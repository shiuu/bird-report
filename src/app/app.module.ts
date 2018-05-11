import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReportAppComponent } from './report-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ReportListComponent } from './reports/report-list.component';
import { ReportThumbnailComponent } from './reports/report-thumbnail.component';

@NgModule({
  declarations: [
    ReportAppComponent,
    NavBarComponent,
    ReportListComponent,
    ReportThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ReportAppComponent]
})
export class AppModule { }
