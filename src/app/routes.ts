import { Routes } from '@angular/router';
import {
  ReportListComponent
} from './reports/report-list.component';
import {
  ReportDetailsComponent
} from './reports/report-details/report-details.component';
import {
  CreateReportComponent
} from './reports/create-report.component';
import { ReportListResolver } from './reports/report-list-resolver.service';
import { ReportResolver } from './reports/report-resolver.service';


export const appRoutes:Routes = [
  { path: 'reports/new', component: CreateReportComponent, canDeactivate: ['canDeactivateCreateReport'] },
  { path: 'reports', component: ReportListComponent, resolve: {reports: ReportListResolver}},
  { path: 'reports/:id', component: ReportDetailsComponent, resolve: {report: ReportResolver}},
  { path: '', redirectTo: '/reports', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]