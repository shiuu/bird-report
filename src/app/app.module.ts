import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReportAppComponent } from './report-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ReportListComponent } from './reports/report-list.component';
import { ReportThumbnailComponent } from './reports/report-thumbnail.component';
import { ReportDetailsComponent } from './reports/report-details/report-details.component';
import { CreateReportComponent } from './reports/create-report.component';

import { appRoutes } from './routes';
import { ReportService } from './reports/shared/report.service';
import { ReportListResolver } from './reports/report-list-resolver.service';
import { ReportResolver } from './reports/report-resolver.service';
import { AuthService } from './user/auth.service';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ReportAppComponent,
    NavBarComponent,
    ReportListComponent,
    ReportThumbnailComponent,
    ReportDetailsComponent,
    CreateReportComponent
  ],
  providers: [
    ReportService,
    AuthService,
    ReportListResolver,
    ReportResolver,
    {
      provide: 'canDeactivateCreateReport', 
      useValue: checkDirtyState     
    }
  ],
  bootstrap: [ReportAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateReportComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this report, Do you really want to cancel?');

  return true;
}