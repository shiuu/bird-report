import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { ReportService } from './shared/report.service'

@Injectable()
export class ReportResolver implements Resolve<any> {
  constructor(private reportService:ReportService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.reportService.getReport(route.params['id']);
  }
}
