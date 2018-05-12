import { Routes } from '@angular/router';
import {
  ReportListComponent
} from './reports/report-list.component';
import {
  ReportDetailsComponent
} from './reports/report-details/report-details.component';

export const appRoutes:Routes = [
  { path: 'reports', component: ReportListComponent},
  { path: 'reports/:id', component: ReportDetailsComponent},
  { path: '', redirectTo: '/reports', pathMatch: 'full'}
]