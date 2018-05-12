import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ReportService } from './shared/report.service';

@Injectable()
export class ReportListResolver implements Resolve<any> {
  constructor(private reportService:ReportService) {}

  resolve() {
    return this.reportService.getReports();
  }
}
