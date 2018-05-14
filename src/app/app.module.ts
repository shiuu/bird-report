import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReportAppComponent } from './report-app.component';
import { NavBarComponent } from './nav/nav-bar.component';

import { 
  ReportListComponent,
  ReportThumbnailComponent,
  ReportDetailsComponent,
  CreateReportComponent,
  SpeciesListComponent,
  AddSpeciesComponent,
  ReportService,
  ReportListResolver,
  ReportResolver
} from './reports/index';

import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { TOASTR_TOKEN, Toastr } from './common/index';

let toastr:Toastr = window['toastr'];

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
    CreateReportComponent,
    SpeciesListComponent,
    AddSpeciesComponent
  ],
  providers: [
    ReportService,
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr },
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