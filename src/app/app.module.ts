import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReportAppComponent } from './report-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ReportListComponent } from './reports/report-list.component';
import { ReportThumbnailComponent } from './reports/report-thumbnail.component';
import { ReportDetailsComponent } from './reports/report-details/report-details.component';

import { appRoutes } from './routes';
import { ReportService } from './reports/shared/report.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ReportAppComponent,
    NavBarComponent,
    ReportListComponent,
    ReportThumbnailComponent,
    ReportDetailsComponent
  ],
  providers: [ReportService],
  bootstrap: [ReportAppComponent]
})
export class AppModule { }
