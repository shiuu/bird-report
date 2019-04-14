import { Routes } from '@angular/router';
import {
  ReportListComponent,
  ReportDetailsComponent,
  CreateReportComponent,
  AddSpeciesComponent,
  ReportListResolver,
  ReportResolver
} from './reports/index';

export const appRoutes: Routes = [
  { path: 'reports/new', component: CreateReportComponent, canDeactivate: ['canDeactivateCreateReport'] },
  { path: 'reports', component: ReportListComponent, resolve: {reports: ReportListResolver}},
  { path: 'reports/:id', component: ReportDetailsComponent, resolve: {report: ReportResolver}},
  { path: 'reports/species/new', component: AddSpeciesComponent },
  { path: '', redirectTo: '/reports', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
